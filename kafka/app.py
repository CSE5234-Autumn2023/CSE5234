from flask import Flask, request
from configparser import ConfigParser
from confluent_kafka import Producer
from confluent_kafka import Consumer, OFFSET_BEGINNING


app = Flask(__name__)


# ROUTES


@app.route('/produce', methods = ['POST'])
def produce():

    # Parse the configuration.
    config_parser = ConfigParser()
    config_parser.read("config.ini")
    config = dict(config_parser['default'])

    # Create Producer instance
    producer = Producer(config)

    # Optional per-message delivery callback (triggered by poll() or flush())
    # when a message has been successfully delivered or permanently
    # failed delivery (after retries).
    def delivery_callback(err, msg):
        if err:
            print('ERROR: Message failed delivery: {}'.format(err))
        else:
            print("Produced event to topic {topic}: key = {key:12} value = {value:12}".format(
                topic=msg.topic(), key=msg.key().decode('utf-8'), value=msg.value().decode('utf-8')))

    # Produce data by selecting random values from these lists.
    topic = "shipping"
    user_id = "EnterpriseOnline"
    product = "Enterprise Online wants to ship"

    producer.produce(topic, product, user_id, callback=delivery_callback)

    # Block until the messages are sent.
    producer.poll(10000)
    producer.flush()

    return "Successful Produce"


@app.route('/consume', methods = ['GET'])
def consume():

    # Parse the configuration.
    config_parser = ConfigParser()
    config_parser.read("config.ini")
    config = dict(config_parser['default'])
    config.update(config_parser['consumer'])

    # Create Consumer instance
    consumer = Consumer(config)

    # Set up a callback to handle the '--reset' flag.
    def reset_offset(consumer, partitions):
        if args.reset:
            for p in partitions:
                p.offset = OFFSET_BEGINNING
            consumer.assign(partitions)

    # Subscribe to topic
    topic = "shipping"
    consumer.subscribe([topic], on_assign=reset_offset)

    # Poll for new messages from Kafka and print them.
    try:
        msg = consumer.poll(1.0)
        if msg is None:
            # Initial message consumption may take up to
            # `session.timeout.ms` for the consumer group to
            # rebalance and start consuming
            print("Waiting...")
        elif msg.error():
            print("ERROR: %s".format(msg.error()))
        else:
            # Extract the (optional) key and value, and print.

            print("Consumed event from topic {topic}: key = {key:12} value = {value:12}".format(
                topic=msg.topic(), key=msg.key().decode('utf-8'), value=msg.value().decode('utf-8')))
            
    except KeyboardInterrupt:
        pass
    finally:
        # Leave group and commit final offsets
        consumer.close()
        
    return "Successful Consume"


if __name__ == "__main__":
    app.run(host='0.0.0.0',port=5001)
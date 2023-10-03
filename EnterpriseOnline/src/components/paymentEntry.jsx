import React from "react"
import { useNavigate } from 'react-router-dom'
import "./styles/paymentEntry.css";

const PaymentEntry = (props) => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        navigate('/purchase/shippingEntry');
    }

    let title = "Enter Payment Information"

    const calculateTotalCost = () => {
        let total_cost = 0

        props.order.products.map((product) => {
            total_cost += product.price * product.quantity;
        })

        return (
            <div className="total-cost">
                <p>Total Cost: ${total_cost}</p>
            </div>
        )
    }

    return (
        <div>
            <h1>
                {title}
            </h1>
            {
                props.order.products.map((product) => {

                    return (
                        <div className="product-in-cart-summary">
                            <p>{product.product_name}:</p>
                            <p>Quantity - {product.quantity}</p>
                            <p>Cost - ${product.price * product.quantity}</p>
                        </div>
                    )
                })
            }

            {
                calculateTotalCost()
            }

            <hr/>

            <div>
                <form onSubmit={handleSubmit}>
                    <label>Credit Card Number</label>
                    <input
                        type="string"
                        required
                        onChange={(e) => {
                            props.setOrder({ ...props.order, credit_card_number: e.target.value })
                        }}
                    />
                    <br />

                    <label>Expiration Date</label>
                    <input
                        type="string"
                        required
                        onChange={(e) => {
                            props.setOrder({ ...props.order, expir_date: e.target.value })
                        }}
                    />
                    <br />

                    <label>cvv</label>
                    <input
                        type="string"
                        required
                        onChange={(e) => {
                            props.setOrder({ ...props.order, cvv: e.target.value })
                        }}
                    />
                    <br />

                    <label>Card Holder Name</label>
                    <input
                        type="string"
                        required
                        onChange={(e) => {
                            props.setOrder({ ...props.order, card_holder_name: e.target.value })
                        }}
                    />
                    <div>
                        <button className='button'>Set up shipping</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PaymentEntry;
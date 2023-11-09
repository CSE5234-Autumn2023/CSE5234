const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');
const BSON = require('bson');
const db = require("../db/conn");



router.get('/inventory', async (req, res) => {
    let db_connect = db.getDb("mockProducts");
    try {
        var records = await db_connect
            .collection("EnterpriseOnlineInventoryDB")
            .find({})
            .toArray();
        res.json(records);
    } catch (e) {
        console.log("An error occurred pulling the records. " + e);
    }
});

router.get('/inventory/items', async (req, res) => {
    let productSearching = req.query.name;

    let db_connect = db.getDb("mockProducts");
    try {
        var records = await db_connect
            .collection("EnterpriseOnlineInventoryDB")
            .find({ 'name': productSearching })
            .toArray();
        res.json(records[0]);
    } catch (e) {
        console.log("An error occurred pulling the records. " + e);
    }
});

router.get('/inventory/items/:id', async (req, res) => {

    var q = { _id: new ObjectId(req.params.id) };
    const serializedQ = BSON.serialize(q);
    const deserializedQ = BSON.deserialize(serializedQ);

    let db_connect = db.getDb("mockProducts");
    try {
        var records = await db_connect
            .collection("EnterpriseOnlineInventoryDB")
            .find(deserializedQ)
            .toArray();
        res.json(records[0]);
    } catch (e) {
        console.log("An error occurred pulling the records. " + e);
    }
});


router.post('/inventory/place-order', (req, res) => {

    let db_connect = db.getDb("mockProducts");
    try {
        req.body.map(async order_item => {

            var q = { _id: new ObjectId(order_item['_id']) };
            const serializedQ = BSON.serialize(q);
            const deserializedQ = BSON.deserialize(serializedQ);

            var record = await db_connect
                .collection("EnterpriseOnlineInventoryDB")
                .find(deserializedQ)
                .toArray();

            var myquery = {  _id: new ObjectId(order_item['_id']) };
            var newvalues = { $set: { quantity: record[0]['quantity'] - order_item['quantity'] } };
            await db_connect.collection("EnterpriseOnlineInventoryDB").updateOne(myquery, newvalues, function (err, res) {
                if (err) throw err;
            });
        });
        res.json("Order placed successfully!");
    } catch (e) {
        console.log("An error occurred pulling the records. " + e);
    }
});

module.exports = router;
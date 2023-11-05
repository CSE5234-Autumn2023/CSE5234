const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');
const BSON = require('bson');
const db = require("../db/conn");


// GET REQUESTS //


router.get('/inventory', async (req, res) => {
    let db_connect = db.getDb("EnterpriseOnlineInventoryDB");
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

    let db_connect = db.getDb("EnterpriseOnlineInventoryDB");
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

    let db_connect = db.getDb("EnterpriseOnlineInventoryDB");
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


router.post('/postOrder', (req, res) => {

    let db_connect = db.getDb("EnterpriseOnlineInventoryDB");
    try {
        db_connect.collection("EnterpriseOnlineSalesDB").insertOne(req.body, function (err, res) {
            if (err) throw err;
            db.close();
        });
        res.json("Order placed successfully!");
    } catch (e) {
        console.log("An error occurred pulling the records. " + e);
    }
});

module.exports = router;
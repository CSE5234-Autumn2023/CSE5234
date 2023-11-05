const express = require('express');
const router = express.Router();
const db = require("../db/conn");


router.post('/order', async (req, res) => {

    let db_connect = db.getDb("mockProducts");
    try {
        db_connect.collection("EnterpriseOnlineSalesDB").insertOne(req.body, function (err, res) {
            if (err) throw err;
            db.close();
        });
        res.json("Updated Inventory!");
    } catch (e) {
        console.log("An error occurred pulling the records. " + e);
    }
});

module.exports = router;
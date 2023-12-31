const express = require('express');
const router = express.Router();
const db = require("../db/conn");
const axios = require('axios');

router.post('/order', async (req, res) => {
    let paymentData = {
        businessEntityName: 'EnterpriseOnline',
        businessEntityAccountNumber: 10002,
        customerPaymentInfo: {
            customerName: req.body.customer_name,
            creditCardNumber: req.body.credit_card_number,
            expirationDate: req.body.expir_date,
            cvv: req.body.cvv
        }
    }
    postPayment(paymentData);
    postShipping();
    let db_connect = db.getDb("mockProducts");
    try {
        db_connect.collection("EnterpriseOnlineSalesDB").insertOne(req.body, function (err, res) {
            if (err) throw err;
        });
        res.json("Updated Inventory!");
    } catch (e) {
        console.log("An error occurred pulling the records. " + e);
    }
});

const postPayment = (paymentData) => {
    axios.post('http://127.0.0.1:5000/payment-processing/credit-card-processing/payment', paymentData)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
};

const postShipping = () => {
    axios.post('http://127.0.0.1:5001/produce')
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
};

module.exports = router;
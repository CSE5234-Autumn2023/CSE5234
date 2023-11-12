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
    axios.post('/payment-processing/credit-card-processing/payment', paymentData)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
};

module.exports = router;
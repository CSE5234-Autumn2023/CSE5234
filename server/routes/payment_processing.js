const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

router.post('/credit-card-processing/payment', async (req, res) => {
    try {
        const confirmationNumber = uuidv4();

        const responseObject = {
            status: 'Payment Successful!',
            confirmationNumber: confirmationNumber
        };

        res.status(200).json(responseObject);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;

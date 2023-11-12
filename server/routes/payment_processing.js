const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

router.post('/credit-card-processing/payment', async (req, res) => {
    const confirmationNumber = uuidv4();

    res.json({
        req: req,
        status: 'Payment Successful!',
        confirmationNumber: confirmationNumber
    });
});

module.exports = router;
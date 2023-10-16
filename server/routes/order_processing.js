const express = require('express');
const router = express.Router();


// MOCK DATA //


let products = [
    {
        "img_url": "../data/product1.jpg",
        "img_alt_text": "Camera",
        "name": "Camera",
        "description": "Model 2 Camera with Extra Zoom",
        "price": 1000,
        "inventoryQuantity": 2
    },
    {
        "img_url": "../data/product2.jpg",
        "img_alt_text": "Watch",
        "name": "Watch",
        "description": "Newly Released Watch 7",
        "price": 500,
        "quantity": 0
    },
    {
        "img_url": "../data/product3.jpg",
        "img_alt_text": "Headphones",
        "name": "Headphones",
        "description": "Best Sounding Headphones",
        "price": 200,
        "quantity": 0
    },
    {
        "img_url": "../data/product4.jpg",
        "img_alt_text": "Rubik's Cube",
        "name": "Rubik's Cube",
        "description": "Hardest Puzzle We Have",
        "price": 25,
        "quantity": 0
    },
    {
        "img_url": "../data/product5.jpg",
        "img_alt_text": "Milk",
        "name": "Milk",
        "description": "Icy Cold Milk",
        "price": 5,
        "quantity": 0
    },
    {
        "img_url": "../data/product6.jpg",
        "img_alt_text": "Basketball",
        "name": "Signed Basketball by Praveen Kumar",
        "description": "Certified by The Committee of Signings",
        "price": 12000,
        "quantity": 0
    }
];


// POST REQUESTS //


// Works for a simple order submit where the post request body is a json list like: [{ "id": 1, "quantity": 1 },{ "id": 2, "quantity": 3 }] for an order with 2 items
// Could improve just threw this here to give an example how to read the req body
// Shouldn't be using the success variable though, just getting this error: Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
//      caused by 2 res.sends being called, for some reason return statement like above isn't returning not really sure what is happening
// Should be able to use postman to test though
router.post('/postOrder', (req, res) => {

    console.log(req.body)
    let success = true;

    req.body.map((orderItem) => {
        if (!("id" in orderItem) || !("quantity" in orderItem)) {
            res.send({ error: 'Invalid order entry.' });
            success = false;
        }
    })
    
    if (success) {
        res.status(200).send({ msg: 'Order submitted successfully.' });
    }
});

module.exports = router;
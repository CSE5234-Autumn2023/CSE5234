const express = require('express');
const router = express.Router();
const db = require("../db/conn");

// MOCK DATA //


let products = [
    {
        "id": 0,
        "img_url": "../data/product1.jpg",
        "img_alt_text": "Camera",
        "name": "Camera",
        "description": "Model 2 Camera with Extra Zoom",
        "price": 1000,
        "quantity": 2
    },
    {
        "id": 1,
        "img_url": "../data/product2.jpg",
        "img_alt_text": "Watch",
        "name": "Watch",
        "description": "Newly Released Watch 7",
        "price": 500,
        "quantity": 1
    },
    {
        "id": 2,
        "img_url": "../data/product3.jpg",
        "img_alt_text": "Headphones",
        "name": "Headphones",
        "description": "Best Sounding Headphones",
        "price": 200,
        "quantity": 1
    },
    {   
        "id": 3,
        "img_url": "../data/product4.jpg",
        "img_alt_text": "Rubik's Cube",
        "name": "Rubik's Cube",
        "description": "Hardest Puzzle We Have",
        "price": 25,
        "quantity": 1
    },
    {
        "id": 4,
        "img_url": "../data/product5.jpg",
        "img_alt_text": "Milk",
        "name": "Milk",
        "description": "Icy Cold Milk",
        "price": 5,
        "quantity": 1
    },
    {
        "id": 5,
        "img_url": "../data/product6.jpg",
        "img_alt_text": "Basketball",
        "name": "Signed Basketball by Praveen Kumar",
        "description": "Certified by The Committee of Signings",
        "price": 12000,
        "quantity": 1
    }
];


// GET REQUESTS //


router.get('/inventory', async (req, res) => {
    let db_connect = db.getDb("mockProducts");
  try {
    var records = await db_connect
        .collection("mockProducts")
        .find({})
        .toArray();
    res.json(records);
  } catch (e) {
    console.log("An error occurred pulling the records. " + e);
  }
});

router.get('/inventory/items', (req, res) => {
    let productSearching = req.query.name;
    console.log(productSearching);

    products.map((product) => {
        if (product.name === productSearching) {
            res.send(product);
            return;
        }
    })

    res.status(400).send({ error: 'Unable to find Product with that Order Name.' });
});

router.get('/inventory/items/:id', (req, res) => {

    let productSearching = req.params.id;

    if (productSearching < products.length && productSearching >= 0) {
        res.send(products[productSearching]);
        return;
    } else {
        res.status(400).send({ error: 'Unable to find Product with that Order ID.' });
    }
});

// req body looks like this [{ "id": 1, "quantity": 1 },{ "id": 2, "quantity": 3 }]
router.post('/postOrder', (req, res) => {
    let success = true;

    req.body.map((orderItem) => {
        if (!("id" in orderItem) || !("quantity" in orderItem)) {
            res.send({ error: 'Invalid order entry.' });
            success = false;
        }
        if (products[orderItem.id].quantity < orderItem.quantity) {
            res.send({ error: 'Inventory quantity less than cart quantity for item ' + orderItem.id + '.' });
            success = false;
        }
    })

    if (success) {
        req.body.map((orderItem) => {
            products[orderItem.id].quantity -= orderItem.quantity;    
        })
    }
    
    if (success) {
        res.status(200).send({ msg: 'Inventory updated successfully.' });
    }
});

module.exports = router;
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


// GET REQUESTS //


router.get('/inventory', (req, res) => {
    return res.send(products);
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



module.exports = router;
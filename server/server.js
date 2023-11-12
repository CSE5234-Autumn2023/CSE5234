const express = require('express');
const bodyParser = require('body-parser');
const inventoryRoutes = require('./routes/inventory_management');
const orderRoutes = require('./routes/order_processing');
const paymentRoutes = require('./routes/payment_processing');
require("dotenv").config({ path: "./config.env" });

const app = express();

const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.json());

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

const db = require("./db/conn");

app.listen(port, async() => {
  await db.connectToServer(function (err) {
    if (err) console.log(err);
  });
  console.log(`Server is running on port ${port}`);
});

app.use('/inventory-management', inventoryRoutes);
app.use('/order-processing', orderRoutes);
app.use('/payment-processing', paymentRoutes);
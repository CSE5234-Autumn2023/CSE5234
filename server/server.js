const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const inventoryRoutes = require('./routes/inventory_management');
const orderRoutes = require('./routes/order_processing');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.json());

app.use('/inventory-management', inventoryRoutes);

app.use('/order-processing', orderRoutes);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
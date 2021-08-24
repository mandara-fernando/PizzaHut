const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require('./connection');
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());
connectDB();

const routes = require('./routes/api');
app.use('/api', routes);

const productAPI = require('./api/product.api');
app.use('/products', productAPI);

const cartAPI = require('./api/cart.api');
app.use('/carts', cartAPI);

const toppingAPI = require('./api/topping.api');
app.use('/toppings', toppingAPI);

const listAPI = require('./api/list.api');
app.use('/lists', listAPI);

const orderAPI = require('./api/order.api');
app.use('/orders', orderAPI);

app.listen(PORT, () => {
    console.log('Service is running');
});

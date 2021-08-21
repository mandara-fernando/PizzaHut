const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require('./connection');
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8050;

app.use(cors());
app.use(bodyParser.json());
connectDB();

const routes = require('./routes/api');
app.use('/api', routes);

app.listen(PORT, () => {
    console.log('Service is running');
});

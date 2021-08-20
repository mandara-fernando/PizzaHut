const express = require('express');
const router = express.Router();
const controller = require('../controllers/product.controller');


// Add product api
router.post('/add', controller.addProduct);

// Get all products
router.get('/', controller.getProducts);


// Update products details
router.patch('/edit/:id', controller.updateProductsDetails);

// Remove a products
router.delete('/remove/:id', controller.removeProduct);


module.exports = router;

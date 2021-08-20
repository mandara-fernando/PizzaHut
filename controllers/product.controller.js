const Product = require('../models/product.model');


// Add product

const addProduct = async (req, res) => {
    if (req.body) {

        const product = new Product(req.body);
        try {
            const newProduct = await product.save();
            res.status(200).json(newProduct);
        } catch (err) {
            res.status(400).json({message: err.message})
        }
    }
}


// Get all the prodcuts as list
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

// update products details

const updateProductsDetails = async (req, res) => {

    if (req.params.id) {
        const product = await Product.findById(req.params.id);
        if (req.body.title != null) {
            product.title = req.body.title;
        }
        if (req.body.description != null) {
            product.description = req.body.description;
        }
        if (req.body.status != null) {
            product.status = req.body.status;
        }
        if (req.body.prices != null) {
            if (req.body.prices.small != null) {
                product.prices.small = req.body.prices.small;
            }
            if (req.body.prices.medium != null) {
                product.prices.medium = req.body.prices.medium;
            }
            if (req.body.prices.large != null) {
                product.prices.large = req.body.prices.large;
            }
        }
        try {
            const updatedProduct = await product.save();
            res.status(200).json(updatedProduct);

        } catch (err) {
            res.status(400).json({message: err.message})
        }
    }
}

//Remvoe the porduct
const removeProduct = async (req, res) => {
    if (req.params.id) {
        const product = await Product.findById(req.params.id);
        try {

            const removedProduct = await product.remove();
            res.status(200).json(removedProduct);

        } catch (err) {
            res.status(400).json({message: err.message})
        }

    }

}

module.exports = {
    addProduct,
    getProducts,
    updateProductsDetails,
    removeProduct
}

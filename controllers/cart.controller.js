const Cart = require('../models/cart.model');

// Add product to the cart
const addToCart = async (req, res) => {
    if (req.body) {
        const cart = new Cart(req.body);
        try {
            const newCartItem = await cart.save();
            res.status(200).json(newCartItem);
        } catch (err) {
            res.status(400).json({message: err.message});
        }
    }
}

// Update cart quantity
const updateProductQty = async (req, res) => {
    if (req.params.id && req.body.qty) {
        const cartItem = Cart.findById(req.params.id);
        cartItem.qty = req.body.qty;
        try {
            const updatedCartItem = await cartItem.save();
            res.status(200).json(updatedCartItem);
        } catch (err) {
            res.status(400).json({message: err.message});
        }
    }
}


// Remove from from cart

const removeFromCart = async (req, res) => {
    if (req.params.id) {
        const cartItem = Cart.findById(req.params.id);
        try {
            const removedCartItem = await cartItem.remove();
            res.status(200).json(removedCartItem);
        } catch (err) {
            res.status(400).json({message: err.message});
        }
    }
}

// Get all cart products

const getAllFromCart = async (req, res) => {
    try {
        const cartItems = await Cart.find({});
        res.status(200).json(cartItems);

    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

module.exports = {
    addToCart,
    updateProductQty,
    removeFromCart,
    getAllFromCart
}

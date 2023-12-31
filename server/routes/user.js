const express = require("express");
const router = express.Router();

// middlewares
const {authCheck, adminCheck} = require('../middlewares/auth');

// controllers
const {userCart, getUserCart, emptyCart, saveAddress, getAddress,
    createOrder, orders, 
    wishlist, addToWishlist,removeFromWishlist, createCashOrder, updateUserDetails,
    createPizza
} = require('../controllers/user');

// cart
router.post('/user/cart', authCheck, userCart);
router.get('/user/cart', authCheck, getUserCart);
router.put('/user/cart', authCheck, emptyCart);

// account
router.post('/user/address', authCheck, saveAddress);
router.get('/user/address', authCheck, getAddress);
router.post('/user/update-userDetails', authCheck, updateUserDetails)

// order
router.post('/user/order', authCheck, createOrder);          // Razorpay
router.post('/user/cash-order', authCheck, createCashOrder); // COD
router.get('/user/orders', authCheck, orders);

// wishlist
router.get('/user/wishlist', authCheck, wishlist);
router.post('/user/wishlist', authCheck, addToWishlist);
router.put('/user/wishlist/:pizzaId', authCheck, removeFromWishlist);

// create pizza
router.post('/user/create-pizza', authCheck, createPizza);

module.exports = router;
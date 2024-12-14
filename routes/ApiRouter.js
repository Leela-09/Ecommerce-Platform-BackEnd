const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');
const userController = require('../controllers/userController');
const orderController = require('../controllers/orderController');

// Product Routes
router.get('/api/products', productController.getAllProducts); // Correct path for all products
router.post('/api/products', productController.createProduct);
router.get('/api/products/:id', productController.getProductById); // Correct path for product by ID

// User Routes
router.post('/api/register', userController.register);
router.post('/api/login', userController.login);

// Order Routes
router.post('/api/orders', orderController.createOrder);
router.get('/api/orders', orderController.getAllOrders);

module.exports = router;


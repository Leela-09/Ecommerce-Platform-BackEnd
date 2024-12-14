const Order = require('../models/order');

exports.createOrder = async (req, res) => {
    const { userId, orderItems, totalAmount } = req.body;

    try {
        const newOrder = new Order({
            user: userId,
            orderItems,
            totalAmount,
        });
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

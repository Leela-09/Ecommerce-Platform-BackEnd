const Product = require('../models/product');

// Fetch all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();  // Get all products from the database
        res.json(products);  // Send the products as JSON response
    } catch (error) {
        res.status(500).json({ message: error.message });  // Handle any errors
    }
};

// Create a new product
exports.createProduct = async (req, res) => {
    const { name, description, price, stock } = req.body;  // Destructure product data from the request body
    try {
        const newProduct = new Product({ name, description, price, stock });  // Create a new product
        await newProduct.save();  // Save the product to the database
        res.status(201).json({
            message: 'Product created successfully!',  // Success message
            product: newProduct  // Include the created product in the response
        });
    } catch (error) {
        res.status(500).json({ message: error.message });  // Handle any errors
    }
};

// Get a single product by ID
exports.getProductById = async (req, res) => {
    const { id } = req.params; // Get the id from the route params
  
    try {
      const product = await Product.findById(id); // Use findById to find the product by its ObjectId
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product); // Return the product as the response
    } catch (error) {
      res.status(400).json({ message: 'Invalid product ID' }); // Handle invalid ObjectId
    }
  };
  



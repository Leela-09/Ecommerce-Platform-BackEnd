const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },  // Add quantity field
  image: { type: String, required: true },     // Add image field
  brand: { type: String, required: true },
  category: { type: String, required: true },
  ratings: { type: Number, min: 1, max: 5, required: true },  // Ensuring ratings are between 1 and 5
  features: { type: [String], required: true },
  befint: { type: String, required: true },    // Add befint field
  icons: { type: [String], required: true },   // Add icons field
  quality: { type: String, required: true },   // Add quality field
}, { timestamps: true });  // Automatically adds createdAt and updatedAt fields

module.exports = mongoose.model('Product', productSchema);




const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 0
  },
  price: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    default: 0
  },
  scent: {
    type: [String]
  },
  brand: {
    type: String,
    required: true
  },
  itemForm: {
    type: String
  },
  powerSource: {
    type: String
  },
  itemDimensions: {
    type: String
  },
  about: {
    type: [String]
  },
  images: {
    type: [String]
  },
  category: {
    type: String
  },
  buyLink: {
    type: String, // Example: https://www.amazon.in/your-product
    validate: {
      validator: function (v) {
        return /^https?:\/\/.+/.test(v); // optional: URL format validation
      },
      message: props => `${props.value} is not a valid URL!`
    }
  }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;

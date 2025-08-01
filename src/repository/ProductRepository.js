const Product = require("../models/productSchema.js");


// CREATE
const createProduct = async (productDetails) => {
  try {
    const product = await Product.create(productDetails);
    return product;
  } catch (error) {
    throw error;
  }
};

// UPDATE
const updateProductById = async (productId, updatedDetails) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      updatedDetails,
      { new: true }
    );
    return updatedProduct;
  } catch (error) {
    throw error;
  }
};

// DELETE
const deleteProductById = async (productId) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);
    return deletedProduct;
  } catch (error) {
    throw error;
  }
};

// FIND BY ID
const findProductById = async (productId) => {
  try {
    const product = await Product.findById(productId);
    return product;
  } catch (error) {
    throw error;
  }
};

// FIND ALL (Optional)
const findAllProducts = async () => {
  try {
    const products = await Product.find({});
    return products;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createProduct,
  updateProductById,
  deleteProductById,
  findProductById,
  findAllProducts, // optional
};


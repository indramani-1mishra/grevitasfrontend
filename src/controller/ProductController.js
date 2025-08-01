
const { CreatProduct, getAllProductsService, getProductByIdService, updateProductService, deleteProductService } = require("../service/Productservise.js");
const path = require("path");

// CREATE
const createProductController = async (req, res) => {
  try {
    const {
      title,
      rating,
      price,
      discount,
      scent,
      brand,
      itemForm,
      powerSource,
      itemDimensions,
      about,
      category,
      buyLink
    } = req.body;

    const images = req.files?.images || [];

    if (!title || !price || !brand) {
      return res.status(400).json({ message: "Title, Price, and Brand are required." });
    }

    const productData = {
      title,
      rating,
      price,
      discount,
      scent,
      brand,
      itemForm,
      powerSource,
      itemDimensions,
      about,
      images,
      category,
      buyLink
    };

    const newProduct = await CreatProduct(productData);
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Product creation failed:", error);
    res.status(500).json({ message: "Failed to create product", error: error.message });
  }
};

// GET ALL
const getAllProductsController = async (req, res) => {
  try {
    const products = await getAllProductsService();
    res.status(200).json(products);
  } catch (error) {
    console.error("Failed to fetch products:", error);
    res.status(500).json({ message: "Failed to fetch products", error: error.message });
  }
};

// GET BY ID
const getProductByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await getProductByIdService(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Failed to get product by ID:", error);
    res.status(500).json({ message: "Failed to get product", error: error.message });
  }
};

// UPDATE
const updateProductController = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedData = {
      ...req.body,
    };

    // handle new images if uploaded
    const images = req.files?.images;
    if (images) {
      updatedData.images = images;
    }

    const updatedProduct = await updateProductService(id, updatedData);

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Failed to update product:", error);
    res.status(500).json({ message: "Failed to update product", error: error.message });
  }
};

// DELETE
const deleteProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await deleteProductService(id);

    if (!deleted) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Failed to delete product:", error);
    res.status(500).json({ message: "Failed to delete product", error: error.message });
  }
};

module.exports = {
  createProductController,
  getAllProductsController,
  getProductByIdController,
  updateProductController,
  deleteProductController,
};

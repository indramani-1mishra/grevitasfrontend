const fs = require("fs");
const cloudinary = require("../config/cloudneryconfig.js");
const {
  createProduct,
  updateProductById,
  deleteProductById,
  findProductById,
  findAllProducts
} = require("../repository/ProductRepository.js");

// CREATE PRODUCT
const CreatProduct = async (productDetails) => {
  try {
    const { images, ...restDetails } = productDetails;

    const uploadedImages = await Promise.all(
      images.map(async (imgObj) => {
        const uploadRes = await cloudinary.uploader.upload(imgObj.path);
        if (fs.existsSync(imgObj.path)) fs.unlinkSync(imgObj.path);
        return uploadRes.secure_url;
      })
    );

    const finalProductData = {
      ...restDetails,
      images: uploadedImages,
    };

    return await createProduct(finalProductData);
  } catch (error) {
    console.error("Create Product Error:", error);
    throw error;
  }
};

// GET ALL PRODUCTS
const getAllProductsService = async () => {
  try {
    return await findAllProducts();
  } catch (error) {
    console.error("Get All Products Error:", error);
    throw error;
  }
};

// GET PRODUCT BY ID
const getProductByIdService = async (productId) => {
  try {
    return await findProductById(productId);
  } catch (error) {
    console.error("Get Product By ID Error:", error);
    throw error;
  }
};

// DELETE PRODUCT
const deleteProductService = async (productId) => {
  try {
    return await deleteProductById(productId);
  } catch (error) {
    console.error("Delete Product Error:", error);
    throw error;
  }
};

// UPDATE PRODUCT
const updateProductService = async (productId, updateDetails) => {
  try {
    const { images, ...restDetails } = updateDetails;
    let updatedImages = [];

    // If new images are provided
    if (images && images.length > 0) {
      updatedImages = await Promise.all(
        images.map(async (imgObj) => {
          const uploadRes = await cloudinary.uploader.upload(imgObj.path);
          if (fs.existsSync(imgObj.path)) fs.unlinkSync(imgObj.path);
          return uploadRes.secure_url;
        })
      );
    }

    const finalUpdateData = {
      ...restDetails,
      ...(updatedImages.length > 0 && { images: updatedImages }),
    };

    return await updateProductById(productId, finalUpdateData);
  } catch (error) {
    console.error("Update Product Error:", error);
    throw error;
  }
};

module.exports = {
  CreatProduct,
  getAllProductsService,
  getProductByIdService,
  deleteProductService,
  updateProductService
};

const express = require('express');
const ProductRouter = express.Router();


const upload = require('../../../middelware/multer');
const { createProductController, getAllProductsController, getProductByIdController, updateProductController, deleteProductController } = require('../../../controller/ProductController');

ProductRouter.post(
  '/',
  upload.fields([{ name: 'images', maxCount: 5 }]),  // adjust maxCount as needed
  createProductController
);
ProductRouter.get('/',getAllProductsController);
ProductRouter.get('/:id',getProductByIdController);
ProductRouter.put('/:id',updateProductController);
ProductRouter.delete('/:id',deleteProductController);

module.exports = ProductRouter;

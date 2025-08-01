const express = require('express');
const ProductRouter = require('./productrouter/productrouter');
const v1Router = express.Router();

v1Router.use('/products',ProductRouter);
module.exports=v1Router;
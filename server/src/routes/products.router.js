const express = require("express");
const {
  getAllProducts,
  getProduct,
} = require("../controllers/products.controller");
const productRouter = express.Router();

productRouter.get("/", getAllProducts);
productRouter.get("/1", getProduct);

module.exports = productRouter;

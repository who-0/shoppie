const express = require("express");
const {
  getAllProducts,
  getProductById,
  getAllCategories,
  getCategoryByName,
} = require("../controllers/products.controller");
const productRouter = express.Router();

productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProductById);
productRouter.get("/categories", getAllCategories);
productRouter.get("/categories/:name", getCategoryByName);

module.exports = productRouter;

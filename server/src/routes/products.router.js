const express = require("express");
const {
  getAllProducts,
  getProductById,
  getAllCategories,
  getCategoryByName,
  updateProductByAdmin,
  deleteProductByAdmin,
} = require("../controllers");
const productRouter = express.Router();

productRouter.get("/", getAllProducts);
productRouter
  .route("/:id")
  .get(getProductById)
  .patch(updateProductByAdmin)
  .delete(deleteProductByAdmin);
productRouter.get("/categories", getAllCategories);
productRouter.get("/categories/:name", getCategoryByName);

module.exports = productRouter;

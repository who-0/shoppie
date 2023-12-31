const {
  signupController,
  loginController,
  logoutController,
  GoogleController,
} = require("./auth.controller");

const {
  postOrder,
  getAllOrder,
  ordersStatus,
  getAllOrderByAdmin,
  postOrderByAdmin,
} = require("./orders.contoller");

const {
  updateUserController,
  usersStatus,
  findSingleUser,
  findAllUser,
  deleteSingleUser,
  adminUpdateUser,
} = require("./users.controller");

const {
  getAllProducts,
  getProductById,
  getAllCategories,
  getCategoryByName,
  updateProductByAdmin,
  deleteProductByAdmin,
} = require("./products.controller");

module.exports = {
  signupController,
  loginController,
  logoutController,
  updateUserController,
  GoogleController,
  postOrder,
  getAllOrder,
  usersStatus,
  ordersStatus,
  findSingleUser,
  findAllUser,
  deleteSingleUser,
  adminUpdateUser,
  getAllOrderByAdmin,
  postOrderByAdmin,
  getAllProducts,
  getProductById,
  getAllCategories,
  getCategoryByName,
  updateProductByAdmin,
  deleteProductByAdmin,
};

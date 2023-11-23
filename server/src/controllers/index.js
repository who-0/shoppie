const {
  signupController,
  loginController,
  logoutController,
  GoogleController,
} = require("./auth.controller");
const { postOrder, getAllOrder,ordersStatus } = require("./orders.contoller");
const {updateUserController,usersStatus} = require("./users.controller");

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
};

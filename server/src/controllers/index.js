const {
  signupController,
  loginController,
  GoogleController,
} = require("./auth.controller");
const postOrder = require("./orders.contoller");
const updateUserController = require("./users.controller");

module.exports = {
  signupController,
  loginController,
  updateUserController,
  GoogleController,
  postOrder,
};

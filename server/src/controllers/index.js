const { signupController, loginController } = require("./auth.controller");
const { updateUserController } = require("./users.controller");

module.exports = { signupController, loginController, updateUserController };

const express = require("express");
const passport = require("passport");
const { signupController, loginController } = require("../controllers");
const authRouter = express.Router();

authRouter.route("/signup").post(signupController);
authRouter.route("/login").post(loginController);

module.exports = authRouter;

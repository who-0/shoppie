const express = require("express");
const { updateUserController } = require("../controllers");

const userRouter = express.Router();

userRouter.route("/user").patch(updateUserController);

module.exports = userRouter;

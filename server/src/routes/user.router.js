const express = require("express");
const { updateUserController } = require("../controllers");

const userRouter = express.Router();

userRouter.route("post").patch(updateUserController);

module.exports = userRouter;

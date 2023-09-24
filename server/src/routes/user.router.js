const express = require("express");
const { updateUserController } = require("../controllers");

const userRouter = express.Router();

userRouter.patch("/", updateUserController);

module.exports = userRouter;

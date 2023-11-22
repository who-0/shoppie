const express = require("express");
const { updateUserController,usersStatus } = require("../controllers");

const userRouter = express.Router();

userRouter.patch("/", updateUserController);
userRouter.get('/',usersStatus);

module.exports = userRouter;

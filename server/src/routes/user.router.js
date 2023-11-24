const express = require("express");
const { updateUserController,usersStatus } = require("../controllers");

const userRouter = express.Router();

userRouter.patch("/", updateUserController);
userRouter.get('/status',usersStatus);

module.exports = userRouter;

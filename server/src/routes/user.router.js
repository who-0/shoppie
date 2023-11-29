const express = require("express");
const { updateUserController,usersStatus, findSingleUser } = require("../controllers");

const userRouter = express.Router();

userRouter.patch("/", updateUserController);
userRouter.get('/status',usersStatus);
userRouter.post('/data',findSingleUser);

module.exports = userRouter;

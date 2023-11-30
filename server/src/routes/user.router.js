const express = require("express");
const { updateUserController,usersStatus, findSingleUser,findAllUser } = require("../controllers");

const userRouter = express.Router();

userRouter.patch("/", updateUserController);
userRouter.get('/status',usersStatus);
userRouter.get('/all',findAllUser);
userRouter.post('/data',findSingleUser);
module.exports = userRouter;

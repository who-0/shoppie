const express = require("express");
const { updateUserController,usersStatus, findSingleUser,findAllUser,deleteSingleUser } = require("../controllers");

const userRouter = express.Router();

userRouter.patch("/", updateUserController);
userRouter.get('/status',usersStatus);
userRouter.get('/all',findAllUser);
userRouter.post('/data',findSingleUser);
userRouter.delete('/:id',deleteSingleUser);
module.exports = userRouter;

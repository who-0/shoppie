const express = require("express");
const { updateUserController,usersStatus, findSingleUser,findAllUser,deleteSingleUser,adminUpdateUser } = require("../controllers");

const userRouter = express.Router();

userRouter.patch("/", updateUserController);
userRouter.get('/status',usersStatus);
userRouter.get('/all',findAllUser);
userRouter.post('/data',findSingleUser);
userRouter.route('/:id').delete(deleteSingleUser).post(adminUpdateUser);
module.exports = userRouter;

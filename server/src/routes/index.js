const express = require("express");
const api = express.Router();
const authRouter = require("./auth.router");
const userRouter = require("./user.router");
const { checkAuth } = require("../middlewares");
const productRouter = require("./products.router");

api.use("/auth", authRouter);
api.use("/user", checkAuth, userRouter);
api.use("/products", productRouter);

module.exports = api;

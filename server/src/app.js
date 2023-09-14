require("express-async-errors");
const express = require("express");
const morgan = require("morgan");
const cookie = require("cookie-parser");
const helmet = require("helmet");
const { authRouter } = require("./routes");
const {
  errorHandlerMiddleware,
  notFoundMiddleware,
} = require("./middlewares/index.js");

const app = express();

if (process.env.NODE_ENV !== "productions") {
  app.use(morgan("dev"));
}
//!Function
app.use(express.json());
app.use(cookie());
app.use(helmet());

//!Routes
app.use("/api/v1/auth", authRouter);

//!middleware
app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

module.exports = app;

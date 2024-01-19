require("express-async-errors");
const express = require("express");
const morgan = require("morgan");
const cookie = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
const api = require("./routes");
const {
  errorHandlerMiddleware,
  notFoundMiddleware,
} = require("./middlewares/index.js");

const app = express();

if (process.env.NODE_ENV !== "productions") {
  app.use(morgan("dev"));
}

//!Function
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PATCH",
    credentials: true,
  })
);
app.use(helmet());
app.use(express.json());
app.use(cookie());

//!Routes
app.use("/api/v1", api);

//!middleware
app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

module.exports = app;

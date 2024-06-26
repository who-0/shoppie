require("express-async-errors");
const express = require("express");
const morgan = require("morgan");
const cookie = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-purge')
const api = require("./routes");
const path = require('path')
const {
  errorHandlerMiddleware,
  notFoundMiddleware,
} = require("./middlewares/index.js");

const app = express();

if (process.env.NODE_ENV !== "productions") {
  app.use(morgan("dev"));
}

//!Function\
app.use(express.static(path.resolve(__dirname,'..','..','./client/dist')))
app.use(
  cors({
    origin: "https://shoppie-gqvo.onrender.com/",
    methods: "GET,POST,PATCH",
    credentials: true,
    optionSuccessStatus: 200,
  })
);
app.use(helmet());
app.use(express.json());
app.use(cookie());
app.use(xss())
app.use(mongoSanitize());

//!Routes
app.use("/api/v1", api);

//!middleware
app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

module.exports = app;

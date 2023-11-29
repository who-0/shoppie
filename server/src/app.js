require("express-async-errors");
const express = require("express");
const morgan = require("morgan");
const cookie = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");
const passport = require("passport");
const session = require("express-session");
const path = require("path");
const api = require("./routes");
const {
  errorHandlerMiddleware,
  notFoundMiddleware,
} = require("./middlewares/index.js");
const GoogleAuth = require("./config/Google");

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
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SECRET_KEY,
  })
);
app.use(passport.initialize());
app.use(passport.session());

//!Oauth
GoogleAuth(passport);

//!Routes
app.use("/api/v1", api);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "test.html"));
});
app.get("/error", (req, res) => {
  res.send("Can't Login with Google");
});

//!middleware
app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

module.exports = app;

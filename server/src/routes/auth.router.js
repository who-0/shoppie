const express = require("express");
const passport = require("passport");
const {
  signupController,
  loginController,
  GoogleController,
} = require("../controllers");
const authRouter = express.Router();

authRouter.route("/signup").post(signupController);
authRouter.route("/login").post(loginController);

//?Google Auth
authRouter
  .route("/google")
  .get(passport.authenticate("google", { scope: ["profile", "email"] }));

authRouter.route("/google/callback").get(
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/shop",
    failureRedirect: "/auth/error",
  })
);

authRouter.route("/success").get(GoogleController);

module.exports = authRouter;

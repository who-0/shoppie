import express from "express";
import { signupController,loginController } from "../controllers/index.js";
const authRouter = express.Router();

authRouter.route("/signup").post(signupController);
authRouter.route("/login").post(loginController);

export default authRouter;

import "express-async-errors";
import express from "express";
import morgan from "morgan";
import cookie from "cookie-parser";
import helmet from "helmet";
import { authRouter } from "./routes/index.js";
import {
  errorHandlerMiddleware,
  notFoundMiddleware,
} from "./middlewares/index.js";

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

export default app;

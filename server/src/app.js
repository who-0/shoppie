import express from "express";
import morgan from "morgan";
import "express-async-errors";

import { authRouter } from "./routes/index.js";
import {
  errorHandlerMiddleware,
  notFoundMiddleware,
} from "./middlewares/index.js";

const app = express();

//!Function
app.use(express.json());
app.use(morgan("tiny"));

//!Routes
app.use("/api/v1/auth", authRouter);

//!middleware
app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

export default app;

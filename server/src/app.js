import express from "express";
import authRouter from "./routes/auth.router.js";
const app = express();

app.use(express.json());

//!Routes
app.use("/api/v1", authRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/*", (req, res) => {
  res.status(404).json({ error: "Page Not Found" });
});

export default app;

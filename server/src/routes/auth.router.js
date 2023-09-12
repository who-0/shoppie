import express from "express";

const authRouter = express.Router();

authRouter.post("/auth", (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  res.status(200).send("data recieve successful!");
});

export default authRouter;

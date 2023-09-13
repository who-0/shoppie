import { StatusCodes } from "http-status-codes";
import { User } from "../models/index.js";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";

const signupController = async (req, res) => {
  const { email, password, uname } = req.body;

  if (!email || !password || !uname) {
    throw new BadRequestError("Please Provide All Values");
  }

  const userExist = await User.findOne({ email });

  if (userExist) {
    throw new BadRequestError("Email already in user. ");
  }

  const user = await User.create({ email, password, name: uname });

  res.status(StatusCodes.OK).json(user);
};

const loginController = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please Provide All Values");
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }

  res.status(StatusCodes.OK).json(user);
};

export { signupController, loginController };

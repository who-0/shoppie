const { StatusCodes } = require("http-status-codes");
const { User } = require("../models");
const { BadRequestError, UnAuthenticatedError } = require("../errors");
const attachCookie = require("../utils/attachCookie");

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
  const token = user.createJWT();
  attachCookie({ res, token });

  res.status(StatusCodes.OK).json({ user, token });
};

const loginController = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please Provide All Values");
  }

  const user = await User.findOne({ email })
    .select("+password")
    .select("+role");
  if (!user) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("Invalid Password");
  }

  user.password = undefined;
  const token = user.createJWT();
  attachCookie({ res, token });

  res.status(StatusCodes.OK).json({ user, token });
};

module.exports = { signupController, loginController };

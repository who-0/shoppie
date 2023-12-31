const { StatusCodes } = require("http-status-codes");
const { User } = require("../models");
const { BadRequestError, UnAuthenticatedError } = require("../errors");
const attachCookie = require("../utils/attachCookie");
const path = require("path");

const signupController = async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    throw new BadRequestError("Please Provide All Values");
  }

  //Find user alrady or not with email.
  const userExist = await User.findOne({ email });
  if (userExist) {
    throw new BadRequestError("Email already in user");
  }

  try {
    const user = await User.create({ name, email, password });
    const token = user.createJWT();
    attachCookie({ res, token });
    return res.status(StatusCodes.OK).json({ user, token });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.BAD_REQUEST).json({ msg: error.message });
  }
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

const logoutController = (req, res) => {
  // console.log('logout start');
  // res.clearCookie("token")
  // console.log('logout end');
  // res.status(200);
};

const GoogleController = (req, res) => {
  const user = req.user;
  console.log(user);
  if (!user) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user, token });
};

module.exports = {
  signupController,
  loginController,
  logoutController,
  GoogleController,
};

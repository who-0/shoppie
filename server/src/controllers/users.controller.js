const { User } = require("../models");
const checkPermissions = require("../utils/checkPermission");

const updateUserController = async (req, res) => {
  const { uname, email, password, _id } = req.body;
  const { userId } = req.user;
  console.log(uname, email, password, _id);
  checkPermissions(_id, userId);
  const user = await User.findById({ _id });
  console.log(user);
  // const updatedUser = await User.findOneAndUpdate(
  //   { _id },
  //   { email, name: uname, password },
  //   { new: true, runValidators: true }
  // );
  // console.log(updatedUser);

  return res.status(200).json(user);
};

module.exports = updateUserController;

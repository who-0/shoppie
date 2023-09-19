const { User } = require("../models");

const updateUserController = async (req, res) => {
  const { uname, email, password, _id } = req.body;
  const updatedUser = await User.updateOne(
    { _id },
    { email, username: uname, password },
    { new: true, runValidators: true }
  );

  return updatedUser;
};

module.exports= updateUserController;

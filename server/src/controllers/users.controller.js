const { User } = require("../models");
const checkPermissions = require("../utils/checkPermission");

const updateUserController = async (req, res) => {
  const { uname, email, password, _id } = req.body;
  const { userId } = req.user;

  //Check user id equal or not from req.body and token

  checkPermissions(_id, userId);

  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id },
      { email, name: uname, password },
      { new: true, runValidators: true }
    );

    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).josn({ msg: error.message });
  }
};

module.exports = updateUserController;

const { User } = require("../models");
const checkPermissions = require("../utils/checkPermission");

const updateUserController = async (req, res) => {
  const { name, email, password, _id, phone } = req.body;
  const { userId } = req.user;
  console.log(_id, userId);
  //?Check user id equal or not from req.body and token
  checkPermissions(_id, userId);
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id },
      { email, name, password, phone },
      { new: true, runValidators: true }
    )
      .select("+role")
      .select("-__v");
    return res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    return res.status(500).josn({ msg: error.message });
  }
};

module.exports = updateUserController;

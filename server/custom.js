require("dotenv").config();
const { connectDB, dbDisconnect } = require("./src/config/db");
const { User } = require("./src/models/index");
const url = process.env.MONGO_URL;
(async () => {
  await connectDB(url);
  await User.deleteMany({ _id: { $ne: "650aecf8fc5105cc8f82ca72" } });
  const allUsers = await User.find({});
  console.log(allUsers.length);
  dbDisconnect();
})();

require("dotenv").config();
const { connectDB, dbDisconnect } = require("./src/config/db");
const { User } = require("./src/models/index");
const url = process.env.MONGO_URL;
console.log(url);
(async () => {
  await connectDB(url);
  await User.deleteMany({});
  dbDisconnect();
})();

const mongoose = require("mongoose");
const MONGO = process.env.MONGO_URL;

mongoose.connection.once("open", () => {
  console.log("DB is Connected!");
});

mongoose.connection.on("error", (error) => {
  console.log(error);
});

async function connectDB() {
  await mongoose.connect(MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

async function dbDisconnect() {
  await mongoose.disconnect();
}

module.exports = { connectDB, dbDisconnect };

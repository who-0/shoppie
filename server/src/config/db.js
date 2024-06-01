const mongoose = require("mongoose");

mongoose.connection.once("open", () => {
  console.log("DB is Connected!");
});

mongoose.connection.on("error", (error) => {
  console.log(error);
});

async function connectDB(url) {
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

async function dbDisconnect() {
  await mongoose.disconnect();
}

module.exports = { connectDB, dbDisconnect };

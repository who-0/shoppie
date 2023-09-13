import mongoose from "mongoose";

mongoose.connection.once("open", () => {
  console.log("DB is Connected!");
});

mongoose.connection.on("error", (error) => {
  console.log(error);
});

const connectDB = async (url) => {
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const dbDisconnect = () => {
  mongoose.disconnect();
};

export { connectDB, dbDisconnect };

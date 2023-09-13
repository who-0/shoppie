import { config } from "dotenv";
config();
import http from "http";
import app from "./src/app.js";
import { connectDB, dbDisconnect } from "./src/config/db.js";

const PORT = process.env.PORT || 5000;
const url = process.env.MONGO_URL;

const server = http.createServer(app);

const start = async () => {
  try {
    await connectDB(url);
    server.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  } catch (error) {
    dbDisconnect();
    console.log(error);
  }
};
start();

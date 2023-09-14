require("dotenv").config();
const http = require("http");
const app = require("./src/app");
const { connectDB, dbDisconnect } = require("./src/config/db");

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

(async () => {
  try {
    await connectDB();
    server.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  } catch (error) {
    dbDisconnect();
    console.log(error);
  }
})();

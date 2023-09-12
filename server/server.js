import { config } from "dotenv";
config();
import app from "./src/app.js";
import http from "http";
const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

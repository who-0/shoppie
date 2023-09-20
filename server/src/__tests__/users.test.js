const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "..", "..", ".env") });
const request = require("supertest");
const { StatusCodes } = require("http-status-codes");
const app = require("../app");
const { connectDB, dbDisconnect } = require("../config/db");
const url = process.env.MONGO_URL;
describe("TEST User API", () => {
  beforeAll(async () => {
    await connectDB(url);
  }, 10000);

  afterAll(async () => {
    await dbDisconnect();
  });

  describe("TEST Update User data", () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTBhZWNmOGZjNTEwNWNjOGY4MmNhNzIiLCJlbWFpbCI6Impva2VyQGdtYWlsLmNvbSIsImlhdCI6MTY5NTIxNDg0NywiZXhwIjoxNjk1MzAxMjQ3fQ.jYoGNkhZI4cTVLVIeKEEpq_i2FA4_ybu-MvYa8HETiA";
    const testUserWithPassword = {
      _id: "650aecf8fc5105cc8f82ca72",
      uname: "test1",
      email: "test1@gmail.com",
      password: "test123",
    };
    const testUserWithoutPassword = {
      _id: "650aecf8fc5105cc8f82ca72",
      uname: "test2",
      email: "test2@gmail.com",
    };

    it("should return status code 200", async () => {
      const response = await request(app)
        .patch("/api/v1/user")
        .set("Cookie", [`token=${token}`])
        .send(testUserWithoutPassword)
        .expect("Content-Type", /json/)
        .expect(StatusCodes.OK);
      const { name, email } = response.body;
      expect(name).toEqual(testUserWithoutPassword.uname);
      expect(email).toEqual(testUserWithoutPassword.email);
    });
  });
});

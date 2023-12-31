const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "..", "..", ".env") });
const request = require("supertest");
const { StatusCodes } = require("http-status-codes");
const app = require("../app");
const { connectDB, dbDisconnect } = require("../config/db");
const url = process.env.MONGO_URL;
const no = Math.floor(Math.random() * 1000);

describe("TEST User API", () => {
  beforeAll(async () => {
    await connectDB(url);
  }, 10000);

  afterAll(async () => {
    await dbDisconnect();
  });

  describe("TEST Update User data", () => {
    const url = "/api/v1/user";
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTBhZWNmOGZjNTEwNWNjOGY4MmNhNzIiLCJlbWFpbCI6InRlc3QyQGdtYWlsLmNvbSIsImlhdCI6MTY5NTU1MTc2MywiZXhwIjoxNzI2MzEwMTYzfQ.v7NJoF590A6643Sd6wPE8QKYGpV7p2C7UWYtZwgGF84";
    const testUserWithPassword = {
      _id: "650aecf8fc5105cc8f82ca72",
      name: "test2",
      email: "test2@gmail.com",
      password: `test${no}`,
    };
    const testUserWithoutPassword = {
      _id: "650aecf8fc5105cc8f82ca72",
      name: "test1",
      email: "test1@gmail.com",
    };

    describe("Should return status code 200", () => {
      it("Test update with no password", async () => {
        const response = await request(app)
          .patch(url)
          .set("Cookie", [`token=${token}`])
          .send(testUserWithoutPassword)
          .expect("Content-Type", /json/)
          .expect(StatusCodes.OK);
        const { name, email } = response.body;
        expect(name).toEqual(testUserWithoutPassword.name);
        expect(email).toEqual(testUserWithoutPassword.email);
      });

      it("Test update with  password", async () => {
        const response = await request(app)
          .patch(url)
          .set("Cookie", [`token=${token}`])
          .send(testUserWithPassword)
          .expect("Content-Type", /json/)
          .expect(StatusCodes.OK);
        const { name, email } = response.body;
        expect(name).toEqual(testUserWithPassword.name);
        expect(email).toEqual(testUserWithPassword.email);
      });
    });

    it(`should return statusCode ${StatusCodes.UNAUTHORIZED} with check permission`, async () => {
      const response = await request(app)
        .patch(url)
        .set("Cookie", [`token=${token}`])
        .expect("Content-Type", /json/)
        .expect(StatusCodes.UNAUTHORIZED);

      const message = response.body.msg;
      expect("Not authorized to access this route.").toBe(message);
    });
  });
});

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "..", "..", ".env") });
const request = require("supertest");
const { StatusCodes } = require("http-status-codes");
const app = require("../app");
const { connectDB, dbDisconnect } = require("../config/db");
const url = process.env.MONGO_URL;

describe("TEST Auth API", () => {
  beforeAll(async () => {
    await connectDB(url);
  }, 10000);

  afterAll(async () => {
    await dbDisconnect();
  });

  describe("Test POST Login /auth/login", () => {
    const testLogin = {
      email: "test@gmail.com",
      password: "test123",
    };
    const testNoEmail = {
      password: "kmd123",
    };
    const testNotExistEmail = {
      email: "daddychill@gmail.com",
      password: "test123",
    };
    const testWrongPassword = {
      email: "test@gmail.com",
      password: "oasjdo",
    };

    it("login test user should return 200", async () => {
      const response = await request(app)
        .post("/api/v1/auth/login")
        .send(testLogin)
        .expect("Content-Type", /json/)
        .expect(200);
      const requrestEmail = testLogin.email;
      const responseEmail = response.body.user.email;
      expect(requrestEmail).toBe(responseEmail);
    });

    // it(`Error login with no Email should return ${StatusCodes.BAD_REQUEST}`, async () => {
    //   const response = await request(app)
    //     .post("/api/v1/auth/login")
    //     .send(testNoEmail)
    //     .expect("Content-Type", /json/)
    //     .expect(StatusCodes.BAD_REQUEST);

    //   expect(response.body.msg).toBe("Please Provide All Values");
    // });

    // it(`Error login with wrong Email should return ${StatusCodes.UNAUTHORIZED}`, async () => {
    //   const response = await request(app)
    //     .post("/api/v1/auth/login")
    //     .send(testNotExistEmail)
    //     .expect("Content-Type", /json/)
    //     .expect(StatusCodes.UNAUTHORIZED);

    //   expect(response.body.msg).toBe("Invalid Credentials");
    // });

    // it(`Error login with wrong Password should return ${StatusCodes.UNAUTHORIZED}`, async () => {
    //   const response = await request(app)
    //     .post("/api/v1/auth/login")
    //     .send(testWrongPassword)
    //     .expect("Content-Type", /json/)
    //     .expect(StatusCodes.UNAUTHORIZED);

    //   expect(response.body.msg).toBe("Invalid Password");
    // });
  });
});

const request = require("supertest");
const { connectDB, dbDisconnect } = require("../config/db");

describe("TEST Auth API", () => {
  beforeAll(async () => {
    await connectDB();
  });

  afterAll(async () => {
    await dbDisconnect();
  });

  describe("Test POST Login /auth/login", () => {
    const testLogin = {
      email: "test@gmail.com",
      password: "test123",
    };
    it("should return 200", async () => {
      const response = await request(app)
        .post("/api/v1/auth/login")
        .send(testLogin)
        .expect("Content-Type", /json/)
        .expect(200);
      const requrestEmail = testLogin.email;
      const responseEmail = response.body.email;
      console.log(response);
      expect(requrestEmail).toBe(responseEmail);
    });
  });
});

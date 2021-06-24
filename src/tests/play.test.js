const request = require("supertest");
const app = require("../server");
describe("Play get endpoint", () => {
  it("should get a list of plays", async () => {
    const res = await request(app).get("/api/plays");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("plays");
  });
});

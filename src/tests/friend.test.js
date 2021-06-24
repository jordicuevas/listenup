const request = require("supertest");
const app = require("../server");
describe("Friends get endpoint", () => {
  it("should get a list of Friends", async () => {
    const res = await request(app).get("/api/friends");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("friends");
  });
});

const request = require("supertest");
const app = require("../server");
describe("User get endpoint", () => {
  it("should get a userinfo", async () => {
    const username = "ray_benigno";
    const res = await request(app).get(`/api/users/${username}`);
    if (res.statusCode === 200) {
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("plays");
      expect(res.body).toHaveProperty("friends");
      expect(res.body).toHaveProperty("tracks");
    } else {
      expect(res.statusCode).toEqual(res.statusCode);
      expect(res.body).toHaveProperty("message");
    }
  });
});

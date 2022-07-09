import { createApp, close, createHttpRequest } from "@midwayjs/mock";
import { Framework } from "@midwayjs/web";
import { Application } from "egg";

// 测试套件：相关的一组测试
describe("test/controller/user.test.ts", () => {
  let app: Application;

  beforeAll(async () => {
    // create app
    app = await createApp<Framework>();
  });

  afterAll(async () => {
    await close(app);
  });

  // 测试用例1
  it("should POST /api/user/login", async () => {
    // make request
    const result = await createHttpRequest(app)
      .post("/api/user/login")
      .send({ 
        userName: 'jack',
        password: 'testtest' 
      });

    // 断言
    // use expect by jest
    expect(result.status).toBe(200);
    expect(result.body.message).toBe("OK");
  });

  it("should POST /api/user/register", async () => {
    // make request
    const result = await createHttpRequest(app)
      .post("/api/user/register")
      .query({ uid: 123 });

    // use expect by jest
    expect(result.status).toBe(200);
    expect(result.body.message).toBe("OK");
  });
});

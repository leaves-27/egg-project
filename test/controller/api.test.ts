import { createApp, close, createHttpRequest } from "@midwayjs/mock";
import { Framework } from "@midwayjs/web";
import { Application } from "egg";

describe("test/controller/api.test.ts", async () => {
  let app: Application;

  beforeAll(async () => {
    app = await createApp<Framework>();
  });

  afterAll(async () => {
    await close(app);
  });

  // 登录生成token,然后使用token去获取数据
  it("GET /api/auth/get_user 参数正确", async () => {
    // make request
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlck5hbWUiOiJqYWNrIiwicGFzc3dvcmQiOiJ0ZXN0dGVzdCIsImRlbGV0ZWQiOm51bGwsImlhdCI6MTY1NzQ1NDQxNCwiZXhwIjoxNjU3NjI3MjE0fQ.-iEifxg0gEHJINj1qq24Wz66v0nr2oSFPOluyK7d0U0';
    const { text: userInfoText } = await createHttpRequest(app)
      .get("/api/auth/get_user")
      .set('authorization', `Bearer ${token}`)
      .query({ uid: '12345678901' })
    const userInfo = JSON.parse(userInfoText);

    // use expect by jest
    expect(userInfo.success).toBe(true);
    expect(userInfo.message).toBe("OK");
    expect(userInfo.data).toEqual({
      uid: '12345678901',
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    });
  });

  it("GET /api/auth/get_user 参数不正确", async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlck5hbWUiOiJqYWNrIiwicGFzc3dvcmQiOiJ0ZXN0dGVzdCIsImRlbGV0ZWQiOm51bGwsImlhdCI6MTY1NzQ1NDQxNCwiZXhwIjoxNjU3NjI3MjE0fQ.-iEifxg0gEHJINj1qq24Wz66v0nr2oSFPOluyK7d0U0';
    const result = await createHttpRequest(app)
      .get("/api/auth/get_user")
      .set('authorization', `Bearer ${token}`)

    // use expect by jest
    expect(result.status).toBe(422);
  });
});

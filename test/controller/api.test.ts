import { createApp, close, createHttpRequest } from "@midwayjs/mock";
import { Framework } from "@midwayjs/web";
import { Application } from "egg";

describe("test/controller/api.test.ts", () => {
  let app: Application;

  beforeAll(async () => {
    // create app
    app = await createApp<Framework>();
  });

  afterAll(async () => {
    await close(app);
  });

  // 登录生成token,然后使用token去获取数据
  it("should POST /api/auth/get_user", async () => {
    const { text } = await createHttpRequest(app)
    .post("/api/user/login")
    .send({ 
      userName: 'jack',
      password: 'testtest' 
    });
    const {
        data: token
    } = JSON.parse(text);
    // make request
    const { text: userInfoText } = await createHttpRequest(app)
      .get("/api/auth/get_user")
      .set('authorization', `Bearer ${token}`)
      .query({ uid: '00001' })
    const userInfo = JSON.parse(userInfoText);

    // use expect by jest
    expect(userInfo.success).toBe(true);
    expect(userInfo.message).toBe("OK");
    expect(userInfo.data).toEqual({
      uid: '00001',
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    });
  });
});

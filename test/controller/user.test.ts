import { createApp, close, createHttpRequest } from "@midwayjs/mock";
import { Framework } from "@midwayjs/web";
import { Application } from "egg";

describe("test/controller/user.test.ts", ()=>{
  // describe("/api/user/login", () => {
  //   // Case1: 登录成功
  //   // Case2: 登录失败
  //   // Case3: 用户名或密码格式不正确

  //   // 测试用例1
  //   it("用户名和密码输入均正确", async () => {
  //     // case1: 登录成功
  //     const result = await createHttpRequest(app)
  //     .post("/api/user/login").send({ 
  //       userName: 'jack',
  //       password: 'testtest' 
  //     });
  //     expect(result.status).toBe(200);
  //     const json = JSON.parse(result.text);
  //     expect(json.success).toBe(true);
  //     expect(typeof json.data).toBe('string'); //非空字符串
  //   });
  //   it("should POST /api/user/login 密码输入不匹配", async () => {
  //     // case2_1: 密码不匹配
  //     const result = await createHttpRequest(app)
  //     .post("/api/user/login").send({ 
  //       userName: 'jack',
  //       password: 'test11' 
  //     });

  //     expect(result.status).toBe(200);

  //     const json = JSON.parse(result.text);
  //     expect(json.success).toBe(false);
  //     expect(json.data).toBeNull();
  //   });

  //   it("should POST /api/user/login 用户名输入不匹配", async () => {
  //     // case2_2: 用户名不匹配
  //     const result = await createHttpRequest(app)
  //     .post("/api/user/login").send({ 
  //       userName: 'jack1',
  //       password: 'testtest' 
  //     });
  //     expect(result.status).toBe(200);

  //     const json = JSON.parse(result.text);
  //     expect(json.success).toBe(false);
  //     expect(json.data).toBe(null);
  //   });

  //   it("should POST /api/user/login 密码长度少于6位", async () => {
  //     // case3_1: 密码长度少于6位
  //     const result = await createHttpRequest(app)
  //     .post("/api/user/login").send({ 
  //       userName: 'jack',
  //       password: 'test' 
  //     })
  //     expect(result.status).toBe(422);
  //   });

  //   it("should POST /api/user/login 密码长度大于8位", async () => {
  //     // case3_2: 密码长度大于8位
  //     const result = await await createHttpRequest(app)
  //     .post("/api/user/login").send({ 
  //       userName: 'jack',
  //       password: 'testtesttest' 
  //     })
  //     expect(result.status).toBe(422);
  // });

  // it("should POST /api/user/login 用户名长度为0", async () => {
  //     // case3_3: 用户名长度为0
  //     const result = await createHttpRequest(app)
  //     .post("/api/user/login").send({ 
  //       userName: '',
  //       password: 'testtest' 
  //     })
  //     expect(result.status).toBe(422);
  //   });
  //   it("should POST /api/user/login 密码长度少于6位", async () => {
  //     // case3_4: 用户名长度为12
  //     const result = await createHttpRequest(app)
  //     .post("/api/user/login")
  //     .send({ 
  //       userName: 'jackjackjackjack',
  //       password: 'testtest' 
  //     })
  //     expect(result.status).toBe(422);
  //   });
  // });
  describe("POST /api/user/register", () => {
    let app: Application;

    beforeAll(async () => {
      // create app
      app = await createApp<Framework>();
    });

    afterAll(async () => {
      await close(app);
    });
    it("插入新用户，返回成功", async () => {
      const timestamp = (new Date()).getTime();
      // make request
      const result = await createHttpRequest(app)
        .post("/api/user/register")
        .send({ 
          userName: `user_${timestamp}`,
          password: `testtest` 
        })

      expect(result.status).toBe(200);
      const json = JSON.parse(result.text);
      expect(json.success).toBe(true);
      expect(json.message).toBe('插入用户成功');
      expect(json.data).toBe(null); 
    });

    it("插入已经存在的用户，返回失败", async () => {
      // make request
      const result = await createHttpRequest(app)
        .post("/api/user/register")
        .send({ 
          userName: 'jack',
          password: 'testtest' 
        })

      expect(result.status).toBe(200);
      const json = JSON.parse(result.text);
      expect(json.success).toBe(false);
      expect(json.message).toBe('当前用户已经存在');
      expect(json.data).toBe(null);  
    });
  });
});

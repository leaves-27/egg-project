import { Provide, Inject, Controller, Get, Post, Body, Query } from '@midwayjs/decorator';
import { JwtService } from '@midwayjs/jwt';
import { Context } from '@midwayjs/web';
import { Validate } from '@midwayjs/validate';

import { UserModel } from '../model/user.model';
import { UserLoginDTO } from '../dto/user.dto';

// 登录、注册、列表展示
// 获取列表信息
@Provide()
@Controller('/api/user')
export class APIUserController {
  @Inject()
  ctx: Context;

  @Inject()
  userModel: UserModel;

  @Inject()
  jwtService: JwtService;

  @Get('/login')
  @Validate()
  async userLogin(@Query() userLogin: UserLoginDTO) {
    const user = await this.userModel.getUserByUsernameAndPassword(userLogin.userName, userLogin.password);
    if(user) {
      const { jwt } = this.ctx.app.config;
      const token = await this.jwtService.sign({
        ...user
      }, jwt.secret, {
        expiresIn: jwt.expiresIn
      });
      // 对输入数据进行校验，然后去数据库匹配，匹配到，则生成token。
      return { success: true, message: 'OK', data: token };
    }

    return { success: false , message: 'Cancel', data: null };
  }

  @Post('/register')
  @Validate()
  async addUser(@Body() registerUser: UserLoginDTO) {
    const user = await this.userModel.getUserByUsernameAndPassword(registerUser.userName, registerUser.password);
    if(user) {
      return { success: false, message: '当前用户已经存在', data: null };
    }
    await this.userModel.addUser(registerUser.userName, registerUser.password);
    return { success: true, message: '插入用户成功', data: null };
  }

}
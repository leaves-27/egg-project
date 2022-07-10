import { Provide, Inject, Controller, Post, Body, Get, Query } from '@midwayjs/decorator';
import { JwtService } from '@midwayjs/jwt';
import { Context } from '@midwayjs/web';

import { UserModel } from '../model/user.model';
import { UserLoginDTO } from '../dto/user.dto';
import { Validate } from '@midwayjs/validate';

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

  @Post('/login')
  @Validate()
  async userLogin(@Body() userLogin: UserLoginDTO) {
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

  @Get('/register')
  async addUser(@Query() user: UserLoginDTO) {
    await this.userModel.addUser(user.userName, user.password);
    return { success: true, message: 'OK', data: '插入用户成功' };
  }

}
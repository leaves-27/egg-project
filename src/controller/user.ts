import { Inject, Controller, Post, Body } from '@midwayjs/decorator';
import { JwtService } from '@midwayjs/jwt';
import { Context } from 'egg';
import { IGetUserResponse } from '../interface';
import { UserService } from '../service/user';
import { UserModel } from '../model/user.model';
import { UserLoginDTO } from '../dto/user.dto';

@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Inject()
  jwt: JwtService;

  @Post('/user/login')
  userLogin(@Body() appParams: UserLoginDTO) {
    // const l = new UserLoginDTO({ username, password});
    console.log('=======appParams:', appParams);
    const token = "";
    // 对输入数据进行校验，然后去数据库匹配，匹配到，则生成token。
    return { success: true, message: 'OK', data: token };
  }
}
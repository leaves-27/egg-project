import { Inject, Controller, Post, Query } from '@midwayjs/decorator';
import { JWTService } from '@midwayjs/jwt';
import { Context } from 'egg';
import { IGetUserResponse } from '../interface';
import { UserService } from '../service/user';
import UserModel from '../model/user.model';
import UserLoginDTO from '../dto/user.dto';

@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Inject()
  jwt: JwtService;

  @Post('/user/login')
  async userLogin(username: string,password: string): Promise<IGetUserResponse> {
    const token = await (async function () {

    })();
    return { success: true, message: 'OK', data: token };
  }
}
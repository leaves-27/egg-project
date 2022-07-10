import { Inject, Controller, Get, Query } from '@midwayjs/decorator';
import { Context } from 'egg';
import { Validate } from '@midwayjs/validate';

import { IGetUserResponse } from '../interface';
import { UserService } from '../service/user';
import { ApiDTO } from '../dto/api.dto';

@Controller('/api/auth')
export class AuthController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Get('/get_user')
  @Validate()
  async getUser(@Query() query: ApiDTO): Promise<IGetUserResponse> {
    const { uid } = query;
    const user = await this.userService.getUser({ uid });
    return { success: true, message: 'OK', data: user };
  }
}

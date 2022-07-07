import { Inject, Controller, Post, Body } from '@midwayjs/decorator';
// import { Inject, Controller, Get } from '@midwayjs/decorator';
// import { JwtService } from '@midwayjs/jwt';
import { Context } from '@midwayjs/web';

// import { IGetUserResponse } from '../interface';
// import { UserService } from '../service/user';
// import { UserModel } from '../model/user.model';
import { UserLoginDTO } from '../dto/user.dto';
import { Validate } from '@midwayjs/validate';

@Controller('/api/user')
export class APIUserController {
  @Inject()
  ctx: Context;

  // @Inject()
  // userService: UserService;

  // @Inject()
  // userModel: UserModel;

  // @Inject()
  // jwt: JwtService;

  // @Get('/get_user')
  // async m(){
  //   return 'hello info';
  // }

  
  @Post('/login')
  @Validate()
  userLogin(@Body() userLogin: UserLoginDTO) {
    console.log('=======userLogin:', userLogin);
    const token = "xx";
    // 对输入数据进行校验，然后去数据库匹配，匹配到，则生成token。
    return { success: true, message: 'OK', data: token };
  }
}
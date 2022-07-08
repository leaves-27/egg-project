import { Aspect, Inject, IMethodAspect, JoinPoint } from '@midwayjs/decorator';
import { JwtService } from '@midwayjs/jwt';
import { httpError } from '@midwayjs/core';
import { AuthController } from '../controller/api';

@Aspect(AuthController)
export class ReportInfo implements IMethodAspect {
  @Inject()
  jwtService: JwtService;
    
  async before(point: JoinPoint) {
    console.log('==========aspect');
      // login接口请求，生成token.其他接口验证token
    const { ctx } = point.target;
    // 判断下有没有校验信息
    if (!ctx.headers['authorization']) {
      throw new httpError.UnauthorizedError();
    }
    // 从 header 上获取校验信息
    const parts = ctx.get('authorization').trim().split(' ');

    if (parts.length !== 2) {
      throw new httpError.UnauthorizedError();
    }

    const [scheme, token] = parts;

    if (/^Bearer$/i.test(scheme)) {
      try {
        //jwt.verify方法验证token是否有效
        await this.jwtService.verify(token, {
          complete: true,
        });
      } catch (error) {
        throw new httpError.UnauthorizedError();
      }
    }
  }
}
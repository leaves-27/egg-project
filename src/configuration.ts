import { join } from 'path';
import { App, Configuration } from '@midwayjs/decorator';
import { ILifeCycle, IMidwayContainer } from '@midwayjs/core';
import * as orm from '@midwayjs/orm';
import * as egg from '@midwayjs/web';
import { Application } from '@midwayjs/web';
import * as jwt from '@midwayjs/jwt';
import * as crossDomain from '@midwayjs/cross-domain';
import * as validate from '@midwayjs/validate';
// import { JwtMiddleware } from './middleware/jwt.middleware';

@Configuration({
  imports: [
    egg,
    jwt,
    crossDomain,
    validate,
    orm,
  ],
  importConfigs: [join(__dirname, './config')],
})
export class ContainerLifeCycle implements ILifeCycle {
  @App()
  app: Application;

  async onReady(applicationContext: IMidwayContainer): Promise<void> {
    // this.app.useMiddleware([
    //   JwtMiddleware,
    // ]);
  }
}

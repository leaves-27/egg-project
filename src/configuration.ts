import { App, Configuration } from '@midwayjs/decorator';
import { ILifeCycle, IMidwayContainer } from '@midwayjs/core';
import { Application } from 'egg';
import { join } from 'path';
import * as egg from '@midwayjs/web';
import * as jwt from '@midwayjs/jwt';
import * as crossDomain from '@midwayjs/cross-domain';
import * as validate from '@midwayjs/validate';
// import { JwtMiddleware } from './middleware/jwt.middleware';

@Configuration({
  imports: [
    egg,
    jwt,
    crossDomain,
    validate
  ],
  importConfigs: [join(__dirname, './config')],
})
export class ContainerLifeCycle implements ILifeCycle {
  @App()
  app: Application;

  async onReady(applicationContext: IMidwayContainer): Promise<void> {
    // this.app.useMiddleware([
    //   // ...
    //   JwtMiddleware,
    // ]);
  }
}

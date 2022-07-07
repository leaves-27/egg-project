import { MidwayConfig, MidwayAppInfo } from '@midwayjs/core';
import { UserEntity } from '../entity/user.entity';

export default (appInfo: MidwayAppInfo) => {
  return {
    // use for cookie sign key, should change to your own and keep security
    keys: appInfo.name + '_1657080373896_9588',
    egg: {
      port: 7001,
    },
    security: {
      csrf: false,
    },
    orm: {
      type: "sqlite",
      database: ":memory:",
      dropSchema: true,
      entities: [UserEntity],
      synchronize: true,
      logging: false,
    },
    // jwt: {
    //   secret: 'xxxxxxxxxxxxxx', // fs.readFileSync('xxxxx.key')
    //   expiresIn: '2d', // https://github.com/vercel/ms
    // },
    cors: {
      credentials: false,
      allowMethods: ['GET','POST','OPTIONS'],
      origin: '*',
      allowHeaders: ['Content-Type'],
      // credentials: false,
      // exposeHeaders: string |string[];
      // keepHeadersOnError: boolean;
    },
    jsonp: {
      callback: 'jsonp',
      limit: 512,
    },
  } as MidwayConfig;
};

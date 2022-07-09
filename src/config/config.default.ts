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
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'a1896806b',
      database: 'user',
      entities: [UserEntity],
      synchronize: true,     // 如果第一次使用，不存在表，有同步的需求可以写 true
      logging: false,
    },
    jwt: {
      secret: 'kk', // fs.readFileSync('xxxxx.key')
      expiresIn: '2d', // https://github.com/vercel/ms
    },
    cors: {
      credentials: false,
      allowMethods: ['GET','POST','OPTIONS'],
      origin: '*',
      allowHeaders: ['Content-Type','authorization'],
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

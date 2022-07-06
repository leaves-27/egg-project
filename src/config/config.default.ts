import { MidwayConfig, MidwayAppInfo } from '@midwayjs/core';
import { UserEntity } from '../entity/user.entity';

export default (appInfo: MidwayAppInfo) => {
  return {
    // use for cookie sign key, should change to your own and keep security
    keys: appInfo.name + '_1657080373896_9588',
    egg: {
      port: 7001,
    },
    // security: {
    //   csrf: false,
    // },
    orm: {
      type: "sqlite",
      database: ":memory:",
      dropSchema: true,
      entities: [UserEntity],
      synchronize: true,
      logging: false,
    },
  } as MidwayConfig;
};

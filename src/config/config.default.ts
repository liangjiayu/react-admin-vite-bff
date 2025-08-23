import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1740806677164_4665',
  koa: {
    port: process.env.APP_PORT || 7310,
  },

  httpProxy: {
    match: /\/api\//,
    host: 'http://fast-api.liangjiayu.cn',
  },
} as MidwayConfig;

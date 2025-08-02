import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1740806677164_4665',
  koa: {
    port: process.env.APP_PORT || 7400,
  },

  httpProxy: {
    match: /\/api\//,
    host: 'http://8.134.97.57:7100',
  },
} as MidwayConfig;

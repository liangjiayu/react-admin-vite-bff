import { HttpService } from '@midwayjs/axios';
import { Controller, Get, Inject } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';

@Controller('/')
export class HomeController {
  @Inject()
  httpService: HttpService;

  @Inject()
  ctx: Context;

  @Get('*')
  async home(): Promise<string> {
    /**
     * 可根据实际情况获取静态资源，如判断域名
     */
    const cdnUrl = 'https://cdn.liangjiayu.cn/react-admin-vite/prod/index.html';
    const response = await this.httpService.get(cdnUrl, {
      responseType: 'text',
    });

    // 用于前端判断是否需要更新
    if (response.headers.etag) {
      this.ctx.set('ETag', response.headers.etag);
    }

    return response.data;
  }
}

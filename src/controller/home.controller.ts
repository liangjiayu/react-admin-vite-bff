import { HttpService } from '@midwayjs/axios';
import { Controller, Get, Inject } from '@midwayjs/core';

@Controller('/')
export class HomeController {
  @Inject()
  httpService: HttpService;

  @Get('*')
  async home(): Promise<string> {
    /**
     * 可根据实际情况获取静态资源，如判断域名
     */
    const result = await this.httpService.get('http://cdn.liangjiayu.top/react-admin-vite/prod/index.html');
    return result.data;
  }
}

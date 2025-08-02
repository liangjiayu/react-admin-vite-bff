import { HttpService } from '@midwayjs/axios';
import { Controller, Get, Inject } from '@midwayjs/core';

@Controller('/')
export class HomeController {
  @Inject()
  httpService: HttpService;

  @Get('*')
  async home(): Promise<string> {
    const result = await this.httpService.get('http://cdn.liangjiayu.top/react-admin-vite/prod/index.html');

    return result.data;
  }
}

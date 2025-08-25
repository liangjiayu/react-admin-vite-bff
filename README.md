# react-admin-vite-bff

基于 midwayjs 框架的BFF服务，主用用于前端项目部署，功能包括接口代理、路由重定向🚀

## 快速开始

```bash
# 克隆项目
git clone <repository-url>

# 进入项目目录
cd react-admin-vite-bff

# 安装依赖
pnpm install

# 启动开发环境
pnpm run dev
```

## 核心功能

#### 路由重定向

主要用于单页面应用，将所有路由重定向到 `index.html`，项目路由交给前端控制。
```ts
@Controller('/')
export class HomeController {
  @Inject()
  httpService: HttpService;

  @Inject()
  ctx: Context;

  @Get('*')
  async home(): Promise<string> {
    /**
     * 可根据实际情况获取静态资源
     */
    const cdnUrl = 'https://cdn.xxxxxx.com/react-admin-vite/prod/index.html';
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
```

#### 接口代理

提供代理服务，匹配到相应规则的请求，将请求转发到指定地址。
```ts
export default {
  /**
   * HTTP 代理
   * @see https://midwayjs.org/docs/extensions/http-proxy
   */
  httpProxy: {
    match: /\/api\//,
    host: 'https://api.xxxxxx.com',
  },
} as MidwayConfig;
```

## 部署

以下是部署相关的命令：

```bash
# 构建项目
pnpm run build

# 启动服务
pnpm run start

# 使用 pm2 启动服务
pnpm run start:server

# 构建 docker 镜像
pnpm run docker:build

# 启动 docker 服务
pnpm run docker:up

# 停止 docker 服务
pnpm run docker:down
```

根据公司基建的情况选择合适的部署方式，个人项目可参考 [deploy-server](./.github/workflows/deploy-server.yml) 的代码，实现自动化部署。

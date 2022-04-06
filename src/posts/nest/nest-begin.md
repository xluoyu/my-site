---
title: 关于本项目的后端Nest(一)
author: 一只死兔子
createTime: 2022-04-06 09:29
tags: ['nest', 'node']
online: false
---

由于目前还在开发阶段，姑且先记录一下Nest创建初期的知识点。

简单记录一下，更多内容请访问以下网站：

[Nest中文文档](!https://docs.nestjs.cn/8/introduction)

### 项目的创建
```
npm i -g @nestjs/cli
nest new project-name
```
官方提供了方便的脚手架，之间安装，运行项目即可。

它会自动创建出如下的结构目录
```
src
 ├── app.controller.spec.ts // 测试用例
 ├── app.controller.ts // 控制器
 ├── app.module.ts // 模块
 ├── app.service.ts // 服务
 └── main.ts // 入口文件
```

### 控制器
控制器(controller)可以说是对应请求的入口
```ts
@Controller('cats') // 创建控制器，设置根路由，之后的路由都是以这个路由为根路由
export class CatsController {
  @Get() // 设置请求方式 对应请求地址 => /cats  Get
  findAll(): string {
    return '准备查找所有的cats'
  }

  @Post('/create') // 对应请求地址 => /cats/create Post
  create(): string {
    return '准备创建一个cats'
  }
}
```
经常使用的用于获取参数的装饰器：
```ts
@Controller('cats') // 设置根路由， 之后的路由都是以这个路由为根路由
export class CatsController {
  @Get(:id) // 对应请求地址 => /cats/:id  Get
  findOne(@Param() params): string {
    console.log(params.id)
  }

  @Get() // 对应请求地址 => /cats?id=123  Get
  findOne2(@Query('id') id): string {
    console.log(id)
  }

  @Post() // 对应请求地址 => /cats Post 通过body传递参数
  create(@Body() body): string {
    console.log(body)
  }

  @Get()
  findAll(@Res() res: Response) {
    res.status(HttpStatus.OK).json([]);
  }
}
```
| 装饰器 | 说明 |
| --- | --- |
| @Body() | 获取请求体中的参数 |
| @Query() | 获取请求地址中的拼接参数 |
| @Param() | 获取请求地址中的路由参数 |
| @Res() | 当前请求实例 |

### 服务
服务(server)就是我们编写业务代码的地方，它是一个类，可以被注入到控制器中，这样就可以在控制器中调用服务中的方法了。
```ts
@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
```

```ts
import { CatsService } from './cats.service';

@Controller('cats') // 设置根路由， 之后的路由都是以这个路由为根路由
export class CatsController {
  // 注入依赖
  constructor(private readonly catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    // 调用服务
    return this.catsService.findAll();
  }
}
```


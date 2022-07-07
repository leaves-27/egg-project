import { Controller, Get } from '@midwayjs/decorator';

@Controller('/')
export class HomeController {
  @Get('/')
  async home() {
    // 去数据库插入一条数据
    return 'Hello Midwayjs!';
  }
}

import { Controller, Get, Query } from '@nestjs/common';
@Controller()
export class AppController {
  @Get('xyz')
  getpath() {
    return '<center> <h1>hola mundo ❤️❤️</h1> </center>';
  }
  @Get()
  getQuery(@Query('pqr') pqr: string) {
    return pqr;
  }
}

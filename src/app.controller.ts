import { Controller, Delete, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get('/user')
  getuser():string{
    return 'new user'
  }
  @Post()
  getuserpost():string{
    return 'new user post'
  }
  @Delete()
  getuserdelete():string{
    return 'new user delete'
  }
}

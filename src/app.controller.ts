import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  constructor() {}
  @Get()
  getHome() {
    return {
      message: 'Welcome to Bubble, people',
    };
  }
}

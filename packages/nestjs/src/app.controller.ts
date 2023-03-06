import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Product } from '@clean-ddd-nestjs/core/modules/product/domain';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log(Product);
    return this.appService.getHello();
  }
}

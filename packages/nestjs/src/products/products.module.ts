import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MakeProductFacade } from '@clean-ddd-nestjs/core/modules/products/infra';

@Module({
  controllers: [ProductsController],
  providers: [
    ProductsService,
    {
      provide: MakeProductFacade,
      useFactory: () => MakeProductFacade.make(),
    },
  ],
})
export class ProductsModule {}

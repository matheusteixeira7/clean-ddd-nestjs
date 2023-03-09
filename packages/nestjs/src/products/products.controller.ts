import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { AddProductFacadeInputDTO } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { MakeProductFacade } from '@clean-ddd-nestjs/core/modules/products/infra';
import { ProductFacade } from '@clean-ddd-nestjs/core/modules/products/application';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    @Inject(MakeProductFacade)
    private productFacade: ProductFacade,
  ) {}

  @Post()
  create(@Body() addProductFacadeInputDTO: AddProductFacadeInputDTO) {
    return this.productFacade.addProduct(addProductFacadeInputDTO);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}

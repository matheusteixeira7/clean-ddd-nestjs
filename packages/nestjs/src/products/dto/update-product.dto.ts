import { PartialType } from '@nestjs/mapped-types';
import { AddProductFacadeInputDTO } from './create-product.dto';

export class UpdateProductDto extends PartialType(AddProductFacadeInputDTO) {}

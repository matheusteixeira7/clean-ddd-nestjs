import { AddProductFacadeInputDto } from '@clean-ddd-nestjs/core/modules/products/application';

export class AddProductFacadeInputDTO implements AddProductFacadeInputDto {
  category: string;
  colors: { name: string; bgColor: string; selectedColor: string }[];
  createdAt?: Date;
  description: string;
  details: { name: string; items: string[] }[];
  id?: string;
  images: { id: string; name: string; src: string; alt: string }[];
  name: string;
  price: number;
  rating: number;
  size: string[];
  stock: number;
  subcategory: string;
  updatedAt?: Date;
}

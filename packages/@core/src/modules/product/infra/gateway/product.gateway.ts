import { type Product } from '#modules/product/domain';

export interface ProductGateway {
  add: (product: Product) => Promise<void>;
  find: (id: string) => Promise<Product>;
}

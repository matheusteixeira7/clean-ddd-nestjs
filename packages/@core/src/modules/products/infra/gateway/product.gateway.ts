import { type Product } from '#modules/products/domain';

export interface ProductGateway {
  add: (product: Product) => Promise<void>;
  find: (id: string) => Promise<Product>;
}

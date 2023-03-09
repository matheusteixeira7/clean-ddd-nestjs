import { AddProductUseCase, CheckStockUseCase } from '#modules/products/domain';
import {
  ProductFacade,
  type ProductFacadeInterface,
} from '#modules/products/application';
import { ProductRepository } from '#modules/products/infra';

export class MakeProductFacade {
  static make(): ProductFacadeInterface {
    const productRepository = new ProductRepository();
    const addProductUseCase = new AddProductUseCase(productRepository);
    const checkStockUseCase = new CheckStockUseCase(productRepository);

    return new ProductFacade({
      addProductUseCase,
      checkStockUseCase,
    });
  }
}

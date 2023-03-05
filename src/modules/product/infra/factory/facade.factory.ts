import { AddProductUseCase, CheckStockUseCase } from '#modules/product/domain'
import { ProductFacade, type ProductFacadeInterface } from '#modules/product/application'
import { ProductRepository } from '#modules/product/infra'

export function makeProductFacade (): ProductFacadeInterface {
  const productRepository = new ProductRepository()
  const addProductUseCase = new AddProductUseCase(productRepository)
  const checkStockUseCase = new CheckStockUseCase(productRepository)

  return new ProductFacade({
    addProductUseCase,
    checkStockUseCase
  })
}

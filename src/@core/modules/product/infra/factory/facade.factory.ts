import { AddProductUseCase, CheckStockUseCase } from '@/src/@core/modules/product/domain'
import { ProductFacade, type ProductFacadeInterface } from '@/src/@core/modules/product/application'
import { ProductRepository } from '@/src/@core/modules/product/infra'

export function makeProductFacade (): ProductFacadeInterface {
  const productRepository = new ProductRepository()
  const addProductUseCase = new AddProductUseCase(productRepository)
  const checkStockUseCase = new CheckStockUseCase(productRepository)

  return new ProductFacade({
    addProductUseCase,
    checkStockUseCase
  })
}

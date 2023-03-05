import { ProductYupValidator, type Product } from '@/src/@core/modules/product/domain'
import { type ValidatorInterface } from '@/src/@core/@seedwork/domain/validators/validator.interface'

export class ProductValidatorFactory {
  static create (): ValidatorInterface<Product> {
    return new ProductYupValidator()
  }
}

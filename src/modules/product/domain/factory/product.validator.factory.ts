import { ProductYupValidator, type Product } from '#modules/product/domain'
import { type ValidatorInterface } from '#seedwork/domain/validators/validator.interface'

export class ProductValidatorFactory {
  static create (): ValidatorInterface<Product> {
    return new ProductYupValidator()
  }
}

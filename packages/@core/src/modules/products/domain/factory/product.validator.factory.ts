import { ProductYupValidator, type Product } from '#modules/products/domain';
import { type ValidatorInterface } from '#seedwork/domain/validators/validator.interface';

export class ProductValidatorFactory {
  static create(): ValidatorInterface<Product> {
    return new ProductYupValidator();
  }
}

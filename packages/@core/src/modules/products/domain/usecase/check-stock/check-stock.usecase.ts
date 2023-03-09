import { type ProductGateway } from '#modules/products/infra';
import { type UseCaseInterface } from '#seedwork/domain';
import {
  type CheckStockInputDto,
  type CheckStockOutputDto,
} from '#modules/products/domain';

export class CheckStockUseCase implements UseCaseInterface {
  private readonly _productRepository: ProductGateway;

  constructor(productRepository: ProductGateway) {
    this._productRepository = productRepository;
  }

  async execute(input: CheckStockInputDto): Promise<CheckStockOutputDto> {
    const product = await this._productRepository.find(input.productId);

    if (product.stock >= input.quantity) {
      return { productId: product.id, available: true };
    } else {
      return { productId: product.id, available: false };
    }
  }
}

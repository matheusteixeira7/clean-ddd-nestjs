import { toXML } from 'jstoxml';
import { type CheckStockFacadeOutputDto } from '#modules/products/application';

export class CheckProductStockPresenter {
  public static toXML(data: CheckStockFacadeOutputDto): string {
    const xmlOptions = {
      header: true,
      indent: '  ',
      newline: '\n',
      allowEmpty: true,
    };

    return toXML(
      {
        productStock: {
          productId: data.productId,
          available: data.available,
        },
      },
      xmlOptions,
    );
  }
}

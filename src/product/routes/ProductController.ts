import { Controller, Delete, Path, Route, Tags } from 'tsoa';
import { ProductService } from '../service/ProductService';

@Tags('Product')
@Route('product')
export class ProductController extends Controller {

    @Delete('{productId}')
    public async removeProduct(
        @Path() productId: number
    ) {
        await ProductService.removeProduct(productId);

        return {
            status: "Product removed"
        }
    }

}

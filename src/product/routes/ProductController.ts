import { Body, Controller, Delete, Path, Post, Route, Tags } from 'tsoa';
import { ProductDto } from '../dto/ProductDto';
import { ProductService } from '../service/ProductService';
import { ProductConverter } from '../converter/ProductConverter';

@Tags('Product')
@Route('product')
export class ProductController extends Controller {

    @Post('')
    public async addProduct(
        @Body() product: ProductDto
    ): Promise<ProductDto> {
        return ProductService.addProduct(
            ProductConverter.toModel(product)
        );
    }

}

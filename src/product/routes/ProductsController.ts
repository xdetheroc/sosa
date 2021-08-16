import { Controller, Get, Route, Tags } from 'tsoa';
import { ProductDto } from '../dto/ProductDto';
import { ProductService } from '../service/ProductService';
import { ProductConverter } from '../converter/ProductConverter';

@Tags('Products')
@Route('products')
export class ProductsController extends Controller {

    @Get('')
    public async getProducts(): Promise<ProductDto[]> {
        return ProductConverter.toDtoList(
            await ProductService.getProducts()
        );
    }

}

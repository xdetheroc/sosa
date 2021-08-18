import { ProductService } from '../src/product/service/ProductService';
import { ProductConverter } from '../src/product/converter/ProductConverter';
import { ProductDto } from '../src/product/dto/ProductDto';

jest.mock('../src/product/service/ProductService');

describe("addProduct", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    })

    it("Should add product", async () => {
        const params: ProductDto = {
            product_name: 'Nature Spring',
            product_description: 'Drinking Water',
        };

        await ProductService.addProduct(
            ProductConverter.toModel(params)
        );
        expect(ProductService.addProduct).toHaveBeenCalled();
        expect(ProductService.addProduct).toHaveBeenCalledWith(
            ProductConverter.toModel(params)
        );
        
    })
})
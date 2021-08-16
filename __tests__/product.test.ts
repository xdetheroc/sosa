import { ProductService } from '../src/product/service/ProductService';

jest.mock('../src/product/service/ProductService');

describe("removeProduct", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    })
    
    it("Should remove product", async () => {
        const productId = 1;
        await ProductService.removeProduct(productId);
        expect(ProductService.removeProduct).toHaveBeenCalled();
        expect(ProductService.removeProduct).toHaveBeenCalledWith(productId);

    })
})
import { ProductService } from '../src/product/service/ProductService';

jest.mock('../src/product/service/ProductService');

describe("getProducts", () => {
    
    beforeEach(() => {
        jest.clearAllMocks();
    })

    it("Should get all products", async () => {
        
        await ProductService.getProducts();
        expect(ProductService.getProducts).toHaveBeenCalled();
        expect(ProductService.getProducts).toHaveBeenCalledWith();
    })
})

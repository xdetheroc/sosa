import { ProductModel } from "../model/ProductModel";

export class ProductService {
    public static async addProduct(product: ProductModel): Promise<ProductModel> {
        try {
            return await ProductModel.create(product);
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
}
import { ProductModel } from "../model/ProductModel";

export class ProductService {
    public static async getProducts(): Promise<ProductModel[]> {
        try {
            return await ProductModel.findAll();
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
}
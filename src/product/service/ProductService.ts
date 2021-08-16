import { ProductModel } from "../model/ProductModel";

export class ProductService {
    
    public static async removeProduct(productId: number) {
        try {
            const deletedRows = await ProductModel.destroy({
                where: {
                    product_id: productId
                }
            });

            console.log(`deleted ${deletedRows} rows`);
            if (deletedRows === 0) {
                throw new Error(`Product ${productId} not found`);
            }

        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
}
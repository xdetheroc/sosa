import { ProductDto } from "../dto/ProductDto";
import { ProductModel } from "../model/ProductModel";

export class ProductConverter {
    static toDto (val: ProductModel) {
        return {
            product_id: val.product_id,
            product_name: val.product_name,
            product_description: val.product_description,
            date_created: val.date_created,
            date_updated: val.date_updated
        } as ProductDto;
    }
    
    static toDtoList (val: ProductModel[]) {
        return val.map( element => {
            return {
                product_id: element.product_id,
                product_name: element.product_name,
                product_description: element.product_description,
                date_created: element.date_created,
                date_updated: element.date_updated
            }
        }) as ProductDto[];
    }

    static toModel (val: ProductDto) {
        return {
            product_id: val.product_id,
            product_name: val.product_name,
            product_description: val.product_description,
            date_created: val.date_created,
            date_updated: val.date_updated
        } as ProductModel; 
    }
}
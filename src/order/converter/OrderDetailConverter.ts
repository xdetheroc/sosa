import { OrderDetailDto } from "../dto/OrderDetailDto";
import { OrderDetailModel } from "../model/OrderDetailModel";

export class OrderDetailConverter {
    static toDto (val: OrderDetailDto) {
        return {
            order_detail_id: val.order_detail_id,
            order_id: val.order_id,
            product_id: val.product_id,
            quantity: val.quantity,
            date_created: val.date_created,
            date_updated: val.date_updated
        } as OrderDetailDto;
    }
    
    static toDtoList (val: OrderDetailModel[]) {
        return val.map( element => {
            return {
                order_detail_id: element.order_detail_id,
                order_id: element.order_id,
                product_id: element.product_id,
                quantity: element.quantity,
                date_created: element.date_created,
                date_updated: element.date_updated
            }
        }) as OrderDetailDto[];
    }

    static toModel (val: OrderDetailDto) {
        return {
            order_detail_id: val.order_detail_id,
            order_id: val.order_id,
            product_id: val.product_id,
            quantity: val.quantity,
            date_created: val.date_created,
            date_updated: val.date_updated
        } as OrderDetailModel; 
    }
}
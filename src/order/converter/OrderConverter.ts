import { OrderDto } from "../dto/OrderDto";
import { OrderModel } from "../model/OrderModel";

export class OrderConverter {
    static toDto (val: OrderDto) {
        return {
            order_id: val.order_id,
            customer_id: val.customer_id,
            order_details: val.order_details,
            date_created: val.date_created,
            date_updated: val.date_updated
        } as OrderDto;
    }
    
    static toDtoList (val: OrderModel[]) {
        return val.map( element => {
            return {
                order_id: element.order_id,
                customer_id: element.customer_id,
                order_details: element.order_details,
                date_created: element.date_created,
                date_updated: element.date_updated
            }
        }) as OrderDto[];
    }

    static toModel (val: OrderDto) {
        return {
            order_id: val.order_id,
            customer_id: val.customer_id,
            order_details: val.order_details,
            date_created: val.date_created,
            date_updated: val.date_updated
        } as OrderModel; 
    }
}
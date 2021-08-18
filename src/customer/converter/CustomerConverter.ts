import { CustomerDto } from "../dto/CustomerDto";
import { CustomerModel } from "../model/CustomerModel";

export class CustomerConverter {
    static toDto (val: CustomerDto) {
        return {
            customer_id: val.customer_id,
            customer_name: val.customer_name,
            date_created: val.date_created,
            date_updated: val.date_updated
        } as CustomerDto;
    }
    
    static toDtoList (val: CustomerModel[]) {
        return val.map( element => {
            return {
                customer_id: element.customer_id,
                customer_name: element.customer_name,
                date_created: element.date_created,
                date_updated: element.date_updated
            }
        }) as CustomerDto[];
    }

    static toModel (val: CustomerDto) {
        return {
            customer_id: val.customer_id,
            customer_name: val.customer_name,
            date_created: val.date_created,
            date_updated: val.date_updated
        } as CustomerModel; 
    }
}
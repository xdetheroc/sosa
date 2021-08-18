import { OrderDetailDto } from "./OrderDetailDto";
export interface OrderDto {
    order_id?: number;
    customer_id?: number;
    order_details: OrderDetailDto[];
    date_created?: string;
    date_updated?: string
}
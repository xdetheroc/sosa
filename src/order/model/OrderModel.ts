import { OrderDetailModel } from "./OrderDetailModel";
import { Model } from 'sequelize';

export class OrderModel extends Model {
    order_id!: number;
    customer_id!: number;
    order_details!: OrderDetailModel[];
    date_created!: string;
    date_updated!: string
}
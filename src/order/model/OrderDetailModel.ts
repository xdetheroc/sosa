import { Model } from 'sequelize';

export class OrderDetailModel extends Model {
    order_detail_id!: number;
    order_id!: number;
    product_id!: number;
    quantity!: number;
    date_created!: string;
    date_updated!: string;
}
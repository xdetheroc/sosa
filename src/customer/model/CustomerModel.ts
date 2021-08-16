import { Model } from 'sequelize';

export class CustomerModel extends Model {
    customer_id!: number;
    customer_name!: string;
    date_created!: string;
    date_updated!: string
}
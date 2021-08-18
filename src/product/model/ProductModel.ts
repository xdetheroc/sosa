import { Model } from 'sequelize';

export class ProductModel extends Model {
    product_id!: number;
    product_name!: string;
    product_description!: string;
    date_created!: string;
    date_updated!: string;
}
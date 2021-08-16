import { OrderModel } from "../model/OrderModel";

export class OrderService {
    public static async addCustomerOrder(order: OrderModel): Promise<OrderModel> {
        try {
            return await OrderModel.create(order, {
                include: [ 'order_details' ]
            });

        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }


}
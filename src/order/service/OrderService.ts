import { OrderModel } from "../model/OrderModel";

export class OrderService {
    public static async getCustomerOrders(customerId: number): Promise<OrderModel[]> {
        try {
            return await OrderModel.findAll({
                where: {
                    customer_id: customerId
                },
                include: [ 'order_details' ]
            });
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
}
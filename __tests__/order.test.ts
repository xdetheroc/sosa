import { OrderService } from '../src/order/service/OrderService';
import { OrderConverter } from '../src/order/converter/OrderConverter';
import { OrderDto } from '../src/order/dto/OrderDto';

jest.mock('../src/order/service/OrderService');

describe("addOrder", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    })

    it("Should add order", async () => {
        const customerId = 1;
        const params: OrderDto = {
            customer_id: customerId,
            order_details: [
                { product_id: 1, quantity: 1 }
            ]
        };

        await OrderService.addCustomerOrder(
            OrderConverter.toModel(params)
        );
        expect(OrderService.addCustomerOrder).toHaveBeenCalled();
        expect(OrderService.addCustomerOrder).toHaveBeenCalledWith(
            OrderConverter.toModel(params)
        );
        
    })
})

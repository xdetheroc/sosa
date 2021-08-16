import { OrderService } from '../src/order/service/OrderService';

jest.mock('../src/order/service/OrderService');

describe("getOrders", () => {
    
    beforeEach(() => {
        jest.clearAllMocks();
    })

    it("Should get all orders", async () => {
        const customerId = 1;
        await OrderService.getCustomerOrders(customerId);
        expect(OrderService.getCustomerOrders).toHaveBeenCalled();
        expect(OrderService.getCustomerOrders).toHaveBeenCalledWith(customerId);
    })
})

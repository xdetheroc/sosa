import { CustomerService } from '../src/customer/service/CustomerService';

jest.mock('../src/customer/service/CustomerService');

describe("getCustomers", () => {
    
    beforeEach(() => {
        jest.clearAllMocks();
    })

    it("Should get all customers", async () => {
        
        await CustomerService.getCustomers();
        expect(CustomerService.getCustomers).toHaveBeenCalled();
        expect(CustomerService.getCustomers).toHaveBeenCalledWith();
    })
})

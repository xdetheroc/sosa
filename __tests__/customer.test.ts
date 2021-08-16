import { CustomerService } from '../src/customer/service/CustomerService';
import { CustomerConverter } from '../src/customer/converter/CustomerConverter';
import { CustomerDto } from '../src/customer/dto/CustomerDto';

jest.mock('../src/customer/service/CustomerService');

describe("addCustomer", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    })

    it("Should add customer", async () => {
        const params: CustomerDto = {
            customer_name: 'Nature Spring',
        };

        await CustomerService.addCustomer(
            CustomerConverter.toModel(params)
        );
        expect(CustomerService.addCustomer).toHaveBeenCalled();
        expect(CustomerService.addCustomer).toHaveBeenCalledWith(
            CustomerConverter.toModel(params)
        );
        
    })
})

import { Body, Controller, Post, Route, Tags } from 'tsoa';
import { CustomerDto } from '../dto/CustomerDto';
import { CustomerService } from '../service/CustomerService';
import { CustomerConverter } from '../converter/CustomerConverter';

@Tags('Customer')
@Route('customer')
export class CustomerController extends Controller {

    @Post('')
    public async addCustomer(
        @Body() customer: CustomerDto
    ): Promise<CustomerDto> {
        return CustomerService.addCustomer(
            CustomerConverter.toModel(customer)
        );
    }
}

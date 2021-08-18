import { Controller, Get, Route, Tags } from 'tsoa';
import { CustomerDto } from '../dto/CustomerDto';
import { CustomerService } from '../service/CustomerService';
import { CustomerConverter } from '../converter/CustomerConverter';

@Tags('Customers')
@Route('customers')
export class CustomersController extends Controller {

    @Get('')
    public async getCustomers(): Promise<CustomerDto[]> {
        return CustomerConverter.toDtoList(
            await CustomerService.getCustomers()
        );
    }

}

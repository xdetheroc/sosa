import { Controller, Get, Path, Route, Tags } from 'tsoa';
import { OrderDto } from '../../order/dto/OrderDto';
import { OrderService } from '../../order/service/OrderService';
import { OrderConverter } from '../../order/converter/OrderConverter';

@Tags('Customer')
@Route('customer')
export class CustomerController extends Controller {

    @Get('{customerId}/orders')
    public async getCustomerOrders(
        @Path() customerId: number
    ): Promise<OrderDto[]> {
        return OrderConverter.toDtoList(
            await OrderService.getCustomerOrders(customerId)
        );
    }

}

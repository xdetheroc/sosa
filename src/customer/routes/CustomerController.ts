import { Body, Controller, Post, Path, Route, Tags } from 'tsoa';
import { OrderDto } from '../../order/dto/OrderDto';
import { OrderService } from '../../order/service/OrderService';
import { OrderConverter } from '../../order/converter/OrderConverter';

@Tags('Customer')
@Route('customer')
export class CustomerController extends Controller {

    @Post('{customerId}/order')
    public async addCustomerOrder(
        @Path() customerId: number,
        @Body() order: OrderDto
    ): Promise<OrderDto> {
        order.customer_id = customerId;
        return OrderService.addCustomerOrder(
            OrderConverter.toModel(order)
        );
    }
}

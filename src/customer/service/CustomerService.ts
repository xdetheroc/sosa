import { CustomerModel } from "../model/CustomerModel";

export class CustomerService {
    public static async getCustomers(): Promise<CustomerModel[]> {
        try {
            return await CustomerModel.findAll();
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }

    public static async addCustomer(customer: CustomerModel): Promise<CustomerModel> {
        try {
            return await CustomerModel.create(customer);
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
}
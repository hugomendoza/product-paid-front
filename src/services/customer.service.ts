import api from '../api/api';
import type { Customer, CustomerResponse } from '../interfaces/customer.interface';

export const createCustomer = async (customer: Customer) => {
  return await api.post<CustomerResponse>('/customers', customer);
};

import type { StateCreator } from 'zustand';
import type { Customer } from '../interfaces/customer.interface';

export interface CustomerSlice {
  customer: Customer;

  storeCustomer: (customer: Customer) => void;
  clearCustomer: () => void;
}

export const createProductSlice: StateCreator<CustomerSlice> = (set) => ({
  customer: {} as Customer,

  storeCustomer: (customer) => set(() => ({ customer: customer })),
  clearCustomer: () => set(() => ({ customer: {} as Customer })),
});

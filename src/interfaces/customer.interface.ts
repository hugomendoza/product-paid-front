export interface Customer {
  id: string;
  name: string;
  phone: string;
  adress: string;
  email: string;
  city: string;
  createdAt: string;
}

export interface CustomerResponse {
  customer: Customer;
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  adress: string;
  city: string;
}

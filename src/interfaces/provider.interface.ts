export interface Provider {
  amount_in_cents: number;
  currency: string;
  customer_email: string;
  reference: string;
  payment_method: PaymentMethod;
}

export interface PaymentMethod {
  type: string;
  installments: number;
  token: string;
}

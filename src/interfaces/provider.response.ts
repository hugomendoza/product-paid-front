export interface ProviderResponse {
  data: Data;
}

export interface Data {
  id: string;
  created_at: Date;
  finalized_at: null;
  amount_in_cents: number;
  reference: string;
  customer_email: string;
  currency: string;
  payment_method_type: string;
  payment_method: PaymentMethod;
  status: string;
  status_message: null;
  billing_data: null;
  shipping_address: null;
  redirect_url: null;
  payment_source_id: null;
  payment_link_id: null;
  customer_data: null;
  bill_id: null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  taxes: any[];
  tip_in_cents: null;
}

export interface PaymentMethod {
  type: string;
  extra: Extra;
  installments: number;
}

export interface Extra {
  bin: string;
  name: string;
  brand: string;
  exp_year: string;
  card_type: string;
  exp_month: string;
  last_four: string;
  card_holder: string;
  is_three_ds: boolean;
  three_ds_auth_type: null;
}

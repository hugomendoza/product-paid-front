export interface Transaction {
  status: string;
  product_amount: number;
  base_fee: number;
  delivery_fee: number;
  total_amount: number;
  payment_method: string;
  customerId: string;
  productId: string;
}

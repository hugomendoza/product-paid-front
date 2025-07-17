export interface TransactionResponse {
  transaction: Transaction;
}

export interface Transaction {
  id: string;
  wompi_transaction_id: null;
  status: string;
  product_amount: string;
  base_fee: string;
  delivery_fee: string;
  total_amount: string;
  payment_method: string;
  customerId: string;
  productId: string;
  createdAt: Date;
}

export interface Delivery {
  customer_address: string;
  city: string;
  transactionId: string;
}

export interface DeliveryResponse extends Delivery {
  id: string;
}

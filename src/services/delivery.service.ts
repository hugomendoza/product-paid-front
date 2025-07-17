import api from '../api/api';
import type { Delivery, DeliveryResponse } from '../interfaces/delivery.interface';

export const createDeliveryService = async (delivery: Delivery) => {
  return await api.post<DeliveryResponse>('/deliveries', delivery);
};

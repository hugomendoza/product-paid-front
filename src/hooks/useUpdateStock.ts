import { createDeliveryService } from '../services/delivery.service';
import { updateStockProduct } from '../services/product.service';
import { useEcommerceStore } from '../store/store';
import { useChangeSteps } from './useChangeSteps';

export const useUpdateStock = () => {
  const quantity = useEcommerceStore((state) => state.quantity);
  const product = useEcommerceStore((state) => state.product);
  const customer = useEcommerceStore((state) => state.customer);
  const transactionId = useEcommerceStore((state) => state.idLocalTransaction);
  const status = useEcommerceStore((state) => state.status);
  const checkStatus = status === 'APPROVED';
  const { setStep } = useChangeSteps();

  const { stock } = product;

  const updatedStock = stock - quantity;

  const deliveryData = {
    customer_address: customer.adress,
    city: customer.city,
    transactionId,
  };

  const updateStock = async () => {
    if (checkStatus) {
      await updateStockProduct(updatedStock);
      await createDeliveryService(deliveryData);
    }

    setTimeout(() => {
      setStep(0);
      localStorage.clear();
    }, 5000);
  };
  return { checkStatus, transactionId, updateStock };
};

import type { Product } from '../interfaces/product.interface';
import { useEcommerceStore } from '../store/store';
import { useChangeSteps } from './useChangeSteps';

export const useStoreProduct = () => {
  const { incrementStep } = useChangeSteps();
  const storeProduct = useEcommerceStore((state) => state.storeProduct);
  const setQuantity = useEcommerceStore((state) => state.setQuantity);

  function startTransaction(product: Product, quantity: number) {
    storeProduct(product);
    setQuantity(quantity);
    incrementStep();
  }

  return { startTransaction };
};

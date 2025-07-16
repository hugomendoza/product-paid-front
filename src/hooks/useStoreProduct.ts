import type { Product } from '../interfaces/product.interface';
import { useEcommerceStore } from '../store/store';
import { useChangeSteps } from './useChangeSteps';

export const useStoreProduct = () => {
  const { incrementStep } = useChangeSteps();
  const storeProduct = useEcommerceStore((state) => state.storeProduct);

  function startTransaction(product: Product) {
    storeProduct(product);
    incrementStep();
  }

  return { startTransaction };
};

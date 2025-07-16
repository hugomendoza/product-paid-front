import type { StateCreator } from 'zustand';
import type { Product } from '../interfaces/product.interface';

export interface ProductSlice {
  product: Product;

  storeProduct: (product: Product) => void;
  clearProduct: () => void;
}

export const createProductSlice: StateCreator<ProductSlice> = (set) => ({
  product: {} as Product,

  storeProduct: (product) => set(() => ({ product: product })),
  clearProduct: () => set(() => ({ product: {} as Product })),
});

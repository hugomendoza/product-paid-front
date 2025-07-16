import type { StateCreator } from 'zustand';
import type { Product } from '../interfaces/product.interface';

export interface ProductSlice {
  product: Product;
  quantity: number;

  storeProduct: (product: Product) => void;
  clearProduct: () => void;
  setQuantity: (quantity: number) => void;
  clearQuantity: () => void;
}

export const createProductSlice: StateCreator<ProductSlice> = (set) => ({
  product: {} as Product,
  quantity: 0,

  storeProduct: (product) => set(() => ({ product: product })),
  clearProduct: () => set(() => ({ product: {} as Product })),
  setQuantity: (quantity) => set(() => ({ quantity: quantity })),
  clearQuantity: () => set(() => ({ quantity: 0 })),
});

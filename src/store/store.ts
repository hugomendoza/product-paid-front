import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createUiSlice, type UiSlice } from './ui.slice';
import { createProductSlice, type ProductSlice } from './product.slice';

type ShareState = UiSlice & ProductSlice;

export const useEcommerceStore = create<ShareState>()(
  devtools(
    (...a) => ({
      ...createUiSlice(...a),
      ...createProductSlice(...a),
    }),
    { name: 'ecommerce-store' },
  ),
);

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createUiSlice, type UiSlice } from './ui.slice';
import { createProductSlice, type ProductSlice } from './product.slice';
import { createCardSlice, type Card } from './card.slice';

type ShareState = UiSlice & ProductSlice & Card;

export const useEcommerceStore = create<ShareState>()(
  devtools(
    (...a) => ({
      ...createUiSlice(...a),
      ...createProductSlice(...a),
      ...createCardSlice(...a),
    }),
    { name: 'ecommerce-store' },
  ),
);

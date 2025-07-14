import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createUiSlice, type UiSlice } from './ui.slice';

type ShareState = UiSlice;

export const useEcommerceStore = create<ShareState>()(
  devtools(
    (...a) => ({
      ...createUiSlice(...a),
    }),
    { name: 'ecommerce-store' },
  ),
);

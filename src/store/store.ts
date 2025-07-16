import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { createUiSlice, type UiSlice } from './ui.slice';
import { createProductSlice, type ProductSlice } from './product.slice';
import { createCardSlice, type Card } from './card.slice';
import { createCustomerSlice, type CustomerSlice } from './customer.slice';

type ShareState = UiSlice & ProductSlice & Card & CustomerSlice;

export const useEcommerceStore = create<ShareState>()(
  devtools(
    persist(
      (...a) => ({
        ...createUiSlice(...a),
        ...createProductSlice(...a),
        ...createCardSlice(...a),
        ...createCustomerSlice(...a),
      }),
      {
        name: 'ecommerce-store',
      },
    ),
    { name: 'ecommerce-store' },
  ),
);

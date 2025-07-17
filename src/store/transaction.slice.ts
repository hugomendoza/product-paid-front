import type { StateCreator } from 'zustand';

export interface TransactionSlice {
  idTransaction: string;
  status: string;

  storeIdTransaction: (idTransaction: string) => void;
  storeStatusTransaction: (status: string) => void;

  clearStatusTransaction: () => void;
  clearIdTransaction: () => void;
}

export const createTransactionSlice: StateCreator<TransactionSlice> = (set) => ({
  idTransaction: '',
  status: '',

  storeIdTransaction: (idTransaction) => set(() => ({ idTransaction: idTransaction })),
  storeStatusTransaction: (status) => set(() => ({ status: status })),

  clearStatusTransaction: () => set(() => ({ status: '' })),
  clearIdTransaction: () => set(() => ({ idTransaction: '' })),
});

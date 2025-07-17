import type { StateCreator } from 'zustand';

export interface TransactionSlice {
  idLocalTransaction: string;
  idTransaction: string;
  status: string;

  storeLocalTransaction: (idLocalTransaction: string) => void;
  clearLocalTransaction: () => void;

  storeIdTransaction: (idTransaction: string) => void;
  storeStatusTransaction: (status: string) => void;

  clearStatusTransaction: () => void;
  clearIdTransaction: () => void;
}

export const createTransactionSlice: StateCreator<TransactionSlice> = (set) => ({
  idTransaction: '',
  status: '',
  idLocalTransaction: '',

  storeLocalTransaction: (idLocalTransaction) =>
    set(() => ({ idLocalTransaction: idLocalTransaction })),
  clearLocalTransaction: () => set(() => ({ idLocalTransaction: '' })),

  storeIdTransaction: (idTransaction) => set(() => ({ idTransaction: idTransaction })),
  storeStatusTransaction: (status) => set(() => ({ status: status })),

  clearStatusTransaction: () => set(() => ({ status: '' })),
  clearIdTransaction: () => set(() => ({ idTransaction: '' })),
});

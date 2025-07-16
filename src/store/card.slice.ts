import type { StateCreator } from 'zustand';

export interface Card {
  token: string;

  saveToken: (token: string) => void;
  clearToken: () => void;
}

export const createCardSlice: StateCreator<Card> = (set) => ({
  token: '',

  saveToken: (token) => set(() => ({ token: token })),
  clearToken: () => set(() => ({ token: '' })),
});

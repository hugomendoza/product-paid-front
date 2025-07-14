import type { StateCreator } from 'zustand';

export interface UiSlice {
  step: number;

  reset: (value: number) => void;
  increment: (value: number) => void;
  decrement: (value: number) => void;
}

export const createUiSlice: StateCreator<UiSlice> = (set) => ({
  step: 0,

  increment: (value: number) => set((state) => ({ step: state.step + value })),
  decrement: (value: number) => set((state) => ({ step: state.step - value })),
  reset: (value: number) => set(() => ({ step: value })),
});

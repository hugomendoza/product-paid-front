import { useEcommerceStore } from '../store/store';

export const useChangeSteps = () => {
  const increment = useEcommerceStore((state) => state.increment);
  const decrement = useEcommerceStore((state) => state.decrement);
  const reset = useEcommerceStore((state) => state.reset);

  function incrementStep() {
    increment(1);
  }

  function decrementStep() {
    decrement(1);
  }

  function setStep(value: number) {
    reset(value);
  }

  return {
    incrementStep,
    decrementStep,
    setStep,
  };
};

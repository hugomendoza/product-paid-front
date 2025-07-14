import { useEcommerceStore } from '../store/store';

export const useChangeSteps = () => {
  const increment = useEcommerceStore((state) => state.increment);
  const decrement = useEcommerceStore((state) => state.decrement);

  function incrementStep() {
    increment(1);
  }

  function decrementStep() {
    decrement(1);
  }

  return {
    incrementStep,
    decrementStep,
  };
};

import { useState, useEffect } from 'react';

export const useCounter = (initialStock: number) => {
  const [counter, setCounter] = useState<number>(0);
  const [stockLeft, setStockLeft] = useState<number>(initialStock || 0);
  const [noStock, setNoStock] = useState<boolean>(false);

  const increment = () => {
    if (stockLeft === 0) return;
    setCounter((current) => current + 1);
    setStockLeft((current) => current - 1);
  };

  const decrement = () => {
    if (counter === 0) return;
    setCounter((current) => current - 1);
    setStockLeft((current) => current + 1);
  };

  const reset = () => setCounter(0);

  useEffect(() => {
    setNoStock(initialStock === 0 || stockLeft === 0);
  }, [initialStock, stockLeft]);

  return {
    counter,
    stockLeft,
    noStock,

    increment,
    decrement,
    reset,
  };
};

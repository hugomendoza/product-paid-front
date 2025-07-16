/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getProductById } from '../services/product.service';
import type { Product } from '../interfaces/product.interface';

export const useFetch = () => {
  const [state, setState] = useState({
    data: {} as Product,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    setState({
      ...state,
      isLoading: true,
    });

    const { data } = await getProductById();

    setState({
      data,
      isLoading: false,
      hasError: null,
    });
  };

  useEffect(() => {
    getFetch();
  }, []);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};

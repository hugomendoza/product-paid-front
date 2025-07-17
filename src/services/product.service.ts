import api from '../api/api';
import type { Product } from '../interfaces/product.interface';
import { getEnvVariables } from '../utils/getEnvVariables';

const { VITE_ID_PRODUCT } = getEnvVariables();

export const getProductById = async () => {
  return await api.get<Product>(`/products/${VITE_ID_PRODUCT}`);
};

export const updateStockProduct = async (stock: number) => {
  return await api.patch(`/products/${VITE_ID_PRODUCT}`, { stock });
};

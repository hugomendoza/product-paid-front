import api from '../api/api';
import type { Transaction } from '../interfaces/transaction.interface';
import type { TransactionResponse } from '../interfaces/transaction.response';

export const createLocalTransaction = async (transaction: Transaction) => {
  return await api.post<TransactionResponse>('/transactions', transaction);
};

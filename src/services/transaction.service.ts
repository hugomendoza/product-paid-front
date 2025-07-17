import api from '../api/api';
import type { StatusTransaction } from '../interfaces/statusTransaction.interface';
import type { Transaction } from '../interfaces/transaction.interface';
import type { TransactionResponse } from '../interfaces/transaction.response';

export const createLocalTransaction = async (transaction: Transaction) => {
  return await api.post<TransactionResponse>('/transactions', transaction);
};

export const validateStatusTransaction = async (id: string) => {
  return await api.get<StatusTransaction>(`/provider/${id}`);
};

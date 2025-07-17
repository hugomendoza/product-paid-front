import api from '../api/api';
import type { Provider } from '../interfaces/provider.interface';
import type { ProviderResponse } from '../interfaces/provider.response';

export const createProviderTransaction = async (transaction: Provider) => {
  return await api.post<ProviderResponse>('/provider', transaction);
};

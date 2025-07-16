import api from '../api/api';
import type { Card } from '../interfaces/card.interface';
import type { TokenCard } from '../interfaces/token.interface';

export const getTokenCard = async (card: Card) => {
  return await api.post<TokenCard>('/card', card);
};

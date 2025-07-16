import { useState } from 'react';
import type { Card } from '../interfaces/card.interface';
import { getTokenCard } from '../services/creditCard.service';
import { useEcommerceStore } from '../store/store';

export const useStoreToken = () => {
  const saveToken = useEcommerceStore((state) => state.saveToken);
  const [loading, setLoading] = useState<boolean>(false);

  async function onGetTokenCard(card: Card) {
    setLoading(true);
    try {
      const { data } = await getTokenCard(card);
      saveToken(data.token);
      setLoading(false);
    } catch (error) {
      console.log({ error });
    }
  }

  return {
    loading,

    onGetTokenCard,
  };
};

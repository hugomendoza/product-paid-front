import { useState, type ChangeEvent } from 'react';

export const useForm = <T extends object>(initialForm: T) => {
  const [formState, setFormState] = useState(initialForm);

  const formatCreditCard = (value: string) => {
    const cleanedValue = value.replace(/[^\d]/g, '');
    const formattedValue = cleanedValue.replace(/(\d{4})/g, '$1 ').trim();
    setFormState({
      ...formState,
      cardNumber: formattedValue,
    });
  };

  const splitExpirationDate = (value: string) => {
    const cleaned = value.replace(/[^\d]/g, '');
    const month = cleaned.slice(0, 2);
    const year = cleaned.slice(2, 4);
    if (month.length === 2 && year.length > 0) {
      setFormState({
        ...formState,
        expirationDate: `${month} / ${year}`,
      });
    } else {
      setFormState({
        ...formState,
        expirationDate: cleaned,
      });
    }
  };

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,

    splitExpirationDate,
    formatCreditCard,
    onInputChange,
    onResetForm,
  };
};

import type { Card } from '../interfaces/card.interface';
import { registerDataSchema, type RegisterData } from '../interfaces/data.schema';
import { useChangeSteps } from './useChangeSteps';
import { useForm } from './useForm';
import { useStoreToken } from './useStoreToken';
import { useZodErrors } from './useZod';
import { useEcommerceStore } from '../store/store';

export const useDataTrasaction = () => {
  const dataTrasaction = {
    adress: '',
    cardHolder: '',
    cardNumber: '',
    city: '',
    cvv: '',
    expirationDate: '',
    name: '',
    phone: '',
    email: '',
  } as RegisterData;

  const { formState, onInputChange, formatCreditCard, splitExpirationDate } =
    useForm(dataTrasaction);

  const { errors, resetErrors, validateFields, clearError } = useZodErrors(dataTrasaction);
  const tokenCard = useEcommerceStore((state) => state.token);
  const { loading, onGetTokenCard } = useStoreToken();

  const { incrementStep } = useChangeSteps();

  const card = {
    number: formState.cardNumber.replace(/\s/g, ''),
    cvc: formState.cvv,
    exp_month: formState.expirationDate.replace(/\s/g, '').split('/')[0],
    exp_year: formState.expirationDate.replace(/\s/g, '').split('/')[1],
    card_holder: formState.cardHolder,
  } as Card;

  const onRegisterDataTransaction = async (formState: RegisterData) => {
    console.log(tokenCard === '');
    try {
      registerDataSchema.parse(formState);
      if (tokenCard === '') {
        await onGetTokenCard(card);
      }
      incrementStep();
    } catch (error) {
      validateFields(error as Error);
    }
  };

  return {
    formState,
    errors,
    loading,

    onInputChange,
    formatCreditCard,
    splitExpirationDate,
    resetErrors,
    validateFields,
    clearError,
    onRegisterDataTransaction,
  };
};

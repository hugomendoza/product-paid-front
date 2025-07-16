import { registerDataSchema, type RegisterData } from '../interfaces/data.schema';
import { useChangeSteps } from './useChangeSteps';
import { useForm } from './useForm';
import { useZodErrors } from './useZod';

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
  } as RegisterData;

  const { formState, onInputChange, formatCreditCard, splitExpirationDate } =
    useForm(dataTrasaction);

  const { errors, resetErrors, validateFields, clearError } = useZodErrors(dataTrasaction);

  const { incrementStep } = useChangeSteps();

  const onRegisterDataTransaction = (formState: RegisterData) => {
    try {
      registerDataSchema.parse(formState);
      incrementStep();
      console.log({ formState });
    } catch (error) {
      validateFields(error as Error);
    }
  };

  return {
    formState,
    errors,

    onInputChange,
    formatCreditCard,
    splitExpirationDate,
    resetErrors,
    validateFields,
    clearError,
    onRegisterDataTransaction,
  };
};

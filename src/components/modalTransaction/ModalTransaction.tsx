import { useEcommerceStore } from '../../store/store';
import { StepPaymentData } from './steps/StepPaymentData';
import { StepProcessPayment } from './steps/StepProcessPayment';
import { StepResultTransaction } from './steps/StepResultTransaction';
import { StepSummary } from './steps/StepSummary';

const stepComponents = {
  1: StepPaymentData,
  2: StepSummary,
  3: StepProcessPayment,
  4: StepResultTransaction,
};

export const ModalTransaction = () => {
  const step = useEcommerceStore((state) => state.step);

  const CurrentStepComponent = stepComponents[step as keyof typeof stepComponents];

  if (!CurrentStepComponent) {
    return null;
  }

  return <CurrentStepComponent isOpen={true} />;
};

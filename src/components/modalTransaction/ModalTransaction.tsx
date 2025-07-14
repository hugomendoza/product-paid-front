import { useEcommerceStore } from '../../store/store';
import { StepPaymentData } from './steps/StepPaymentData';
import { StepProcessPayment } from './steps/StepProcessPayment';
import { StepResultTransaction } from './steps/StepResultTransaction';
import { StepSummary } from './steps/StepSummary';

export const ModalTransaction = () => {
  const step = useEcommerceStore((state) => state.step);
  return (
    <>
      {step === 1 && <StepPaymentData isOpen={step === 1} />}
      {step === 2 && <StepSummary isOpen={step === 2} />}
      {step === 3 && <StepProcessPayment isOpen={step === 3} />}
      {step === 4 && <StepResultTransaction isOpen={step === 4} />}
    </>
  );
};

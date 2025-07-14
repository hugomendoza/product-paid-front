import { StepPaymentData } from './steps/StepPaymentData';
import { StepProcessPayment } from './steps/StepProcessPayment';
import { StepResultTransaction } from './steps/StepResultTransaction';
import { StepSummary } from './steps/StepSummary';

export const ModalTransaction = () => {
  return (
    <>
      {/* Step 1 */}
      <StepPaymentData />
      {/* Step 2 */}
      <StepSummary />
      {/* Step 3 */}
      <StepProcessPayment />
      {/* Step 4 */}
      <StepResultTransaction />
    </>
  );
};

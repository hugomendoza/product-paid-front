import { Loader2 } from 'lucide-react';
import { ModalLayout } from '../../layouts/ModalLayout';
import { useChangeSteps } from '../../../hooks/useChangeSteps';
import { useStatusTransaction } from '../../../hooks/useStatusTransaction';

interface Props {
  isOpen: boolean;
}

export const StepProcessPayment = ({ isOpen }: Props) => {
  const { decrementStep } = useChangeSteps();
  useStatusTransaction();
  return (
    <ModalLayout title="Ya estamos cerca!!!!" isOpen={isOpen} onClose={decrementStep}>
      <div className="flex flex-col items-center justify-center py-8 space-y-4">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="text-lg font-medium">Procesando pago...</p>
        <p className="text-sm text-muted-foreground text-center">
          Por favor espera mientras procesamos tu transacción
        </p>
      </div>
    </ModalLayout>
  );
};

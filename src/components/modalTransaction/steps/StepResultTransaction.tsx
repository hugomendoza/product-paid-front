import { BookmarkX, CheckCircle } from 'lucide-react';
import { ModalLayout } from '../../layouts/ModalLayout';
import { useChangeSteps } from '../../../hooks/useChangeSteps';
import { useUpdateStock } from '../../../hooks/useUpdateStock';
import { useEffect } from 'react';

interface Props {
  isOpen: boolean;
}

export const StepResultTransaction = ({ isOpen }: Props) => {
  const { decrementStep } = useChangeSteps();

  const { checkStatus, transactionId, updateStock } = useUpdateStock();

  useEffect(() => {
    updateStock();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ModalLayout
      title={checkStatus ? 'Transacción exitosa' : 'Transacción rechazada'}
      isOpen={isOpen}
      onClose={decrementStep}
    >
      <div className="flex flex-col items-center space-y-4">
        {checkStatus ? (
          <CheckCircle className="h-16 w-16 text-green-500" />
        ) : (
          <BookmarkX className="h-16 w-16 text-red-500" />
        )}
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">ID de transacción: {transactionId}</p>
          <p className="text-sm text-muted-foreground">
            En 5 segundos serán redirigidos a la plataforma de pago
          </p>
        </div>
      </div>
    </ModalLayout>
  );
};

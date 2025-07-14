import { CheckCircle } from 'lucide-react';
import { ModalLayout } from '../../layouts/ModalLayout';

export const StepResultTransaction = () => {
  return (
    <ModalLayout title="¡Pago exitoso!" isOpen={true} onClose={() => {}}>
      <div className="flex flex-col items-center space-y-4">
        <CheckCircle className="h-16 w-16 text-green-500" />
        <div className="text-center space-y-2">
          <p className="text-lg font-medium">Transacción exitosa</p>
          <p className="text-sm text-muted-foreground">ID de transacción: lñsdflñsdflñsdfñl</p>
          <p className="text-sm text-muted-foreground">
            En 5 segundos serán redirigidos a la plataforma de pago
          </p>
        </div>
      </div>
    </ModalLayout>
  );
};

import { useChangeSteps } from '../../../hooks/useChangeSteps';
import { useCreateTransaction } from '../../../hooks/useCreateTransaction';
import { useEcommerceStore } from '../../../store/store';
import { ModalLayout } from '../../layouts/ModalLayout';
import { StepFooter } from './StepFooter';

interface Props {
  isOpen: boolean;
}

export const StepSummary = ({ isOpen }: Props) => {
  const product = useEcommerceStore((state) => state.product);
  const quantity = useEcommerceStore((state) => state.quantity);

  const { loading, customer, onCreateTransaction } = useCreateTransaction();
  const { decrementStep } = useChangeSteps();

  return (
    <ModalLayout title="Resúmen de la compra" isOpen={isOpen} onClose={decrementStep}>
      <div className="space-y-3">
        <div className="space-y-3 border border-slate-200 p-4 rounded-xl">
          <h4 className="font-bold">{product.name}</h4>
          <div className="flex justify-between flex-wrap space-y-2">
            <p className="w-1/2">Cantidad</p>
            <p className="w-1/2 text-right">{quantity}</p>
            <p className="w-1/2">Precio</p>
            <p className="w-1/2 text-right">
              ${(product.price * quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            </p>
            <p className="w-1/2">Tarifa base</p>
            <p className="w-1/2 text-right">$5.000</p>
            <p className="w-1/2">Envío</p>
            <p className="w-1/2 text-right">$15.000</p>
          </div>
          <hr />
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>
              $
              {(product.price * quantity + 5000 + 15000)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            </span>
          </div>
        </div>
        <div className="flex justify-between flex-wrap space-y-2 border border-slate-200 p-4 rounded-xl text-sm">
          <p className="w-1/2">Nombre</p>
          <p className="w-1/2 text-right">{customer.name}</p>
          <p className="w-1/2">Dirección</p>
          <p className="w-1/2 text-right">{customer.adress}</p>
          <p className="w-1/2">Teléfono</p>
          <p className="w-1/2 text-right">{customer.phone}</p>
          <p className="w-1/2">Ciudad</p>
          <p className="w-1/2 text-right">{customer.city}</p>
        </div>
        <StepFooter
          disabled={loading}
          onBack={decrementStep}
          onNext={onCreateTransaction}
          nextLabel="Realizar pago"
        />
      </div>
    </ModalLayout>
  );
};

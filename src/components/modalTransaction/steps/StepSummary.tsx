import { useEcommerceStore } from '../../../store/store';
import { ModalLayout } from '../../layouts/ModalLayout';
import { Button } from '../../ui/Button/Button';

interface Props {
  isOpen: boolean;
}

export const StepSummary = ({ isOpen }: Props) => {
  const increment = useEcommerceStore((state) => state.increment);
  const decrement = useEcommerceStore((state) => state.decrement);
  return (
    <ModalLayout title="Resúmen de la compra" isOpen={isOpen} onClose={() => {}}>
      <div className="space-y-4">
        <div className="space-y-4 border border-slate-200 p-4 rounded-xl">
          <h4 className="text-lg">Producto</h4>
          <div className="flex justify-between">
            <span className="font-medium">Product name</span>
            <span>$200</span>
          </div>
        </div>
        <div className="space-y-4 border border-slate-200 p-4 rounded-xl">
          <h4 className="text-lg">Total de la compra</h4>
          <div className="flex justify-between">
            <span>Precio del producto</span>
            <span>$200</span>
          </div>
          <div className="flex justify-between">
            <span>Tarifa base</span>
            <span>$200</span>
          </div>
          <div className="flex justify-between">
            <span>Envío</span>
            <span>$200</span>
          </div>
          <hr />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>$200</span>
          </div>
        </div>
        <div className="space-y-4 border border-slate-200 p-4 rounded-xl">
          <h4 className="text-lg">Datos de entrega</h4>
          <p>calle 123</p>
          <p>Bogotá</p>
          <p>telefono</p>
        </div>
        <footer className="flex justify-end gap-4">
          <Button onClick={() => decrement(1)}>Atras</Button>
          <Button onClick={() => increment(1)}>Confirmar pago</Button>
        </footer>
      </div>
    </ModalLayout>
  );
};

import { ModalLayout } from '../../layouts/ModalLayout';
import { StepFooter } from './StepFooter';

interface Props {
  isOpen: boolean;
}

export const StepSummary = ({ isOpen }: Props) => {
  return (
    <ModalLayout title="Resúmen de la compra" isOpen={isOpen} onClose={() => {}}>
      <div className="space-y-3">
        <div className="space-y-3 border border-slate-200 p-4 rounded-xl">
          <h4 className="font-bold">Nombre del producto</h4>
          <div className="flex justify-between flex-wrap space-y-2">
            <p className="w-1/2">Cantidad</p>
            <p className="w-1/2 text-right">5</p>
            <p className="w-1/2">Precio</p>
            <p className="w-1/2 text-right">$29.900</p>
            <p className="w-1/2">Tarifa base</p>
            <p className="w-1/2 text-right">$5.000</p>
            <p className="w-1/2">Envío</p>
            <p className="w-1/2 text-right">$15.000</p>
          </div>
          <hr />
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>$200</span>
          </div>
        </div>
        <div className="flex justify-between flex-wrap space-y-2 border border-slate-200 p-4 rounded-xl">
          <p className="w-1/2">Nombre</p>
          <p className="w-1/2 text-right">Hugo Gonzales</p>
          <p className="w-1/2">Dirección</p>
          <p className="w-1/2 text-right">Calle 1 # 1-1</p>
          <p className="w-1/2">Teléfono</p>
          <p className="w-1/2 text-right">317 123 4567</p>
          <p className="w-1/2">Ciudad</p>
          <p className="w-1/2 text-right">Bogotá</p>
        </div>
        <StepFooter onBack={() => {}} onNext={() => {}} nextLabel="Realizar pago" />
      </div>
    </ModalLayout>
  );
};

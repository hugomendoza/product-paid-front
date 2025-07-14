import { ModalLayout } from '../../layouts/ModalLayout';
import { Button } from '../../ui/Button/Button';
import { Input } from '../../ui/Input';

import logoVisa from '../../../assets/svg/logo-visa.svg';
import { useEcommerceStore } from '../../../store/store';

interface Props {
  isOpen: boolean;
}

export const StepPaymentData = ({ isOpen }: Props) => {
  const increment = useEcommerceStore((state) => state.increment);
  const decrement = useEcommerceStore((state) => state.decrement);
  return (
    <ModalLayout title="Datos de pago y entrega" isOpen={isOpen} onClose={() => {}}>
      <form className="space-y-4">
        <div className="space-y-4 border border-slate-200 p-4 rounded-xl mb-4">
          <div className="relative">
            <Input label="Número de tarjeta" className="w-full" />
            <figure className="absolute bottom-1/2 right-4 transform translate-y-[135%]">
              <img src={logoVisa} alt="" className="w-12" />
            </figure>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input label="Número de tarjeta" className="w-full" />
            <Input label="Número de tarjeta" className="w-full" />
          </div>
          <Input label="Número de tarjeta" className="w-full" />
        </div>
        <div className="space-y-4 border border-slate-200 p-4 rounded-xl">
          <div className="grid grid-cols-2 gap-4">
            <Input label="Número de tarjeta" className="w-full" />
            <Input label="Número de tarjeta" className="w-full" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input label="Número de tarjeta" className="w-full" />
            <Input label="Número de tarjeta" className="w-full" />
          </div>
        </div>
        <footer className="flex justify-end gap-4">
          <Button type="button" onClick={() => decrement(1)}>
            Cerrar
          </Button>
          <Button type="button" onClick={() => increment(1)}>
            Continuar
          </Button>
        </footer>
      </form>
    </ModalLayout>
  );
};

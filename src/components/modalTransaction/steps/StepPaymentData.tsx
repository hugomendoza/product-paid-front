import { useChangeSteps } from '../../../hooks/useChangeSteps';
import { StepFooter } from './StepFooter';
import { ModalLayout } from '../../layouts/ModalLayout';
import { Input } from '../../ui/Input';

import logoVisa from '../../../assets/svg/logo-visa.svg';

interface Props {
  isOpen: boolean;
}

export const StepPaymentData = ({ isOpen }: Props) => {
  const { decrementStep, incrementStep } = useChangeSteps();
  return (
    <ModalLayout title="Datos de pago y entrega" isOpen={isOpen} onClose={decrementStep}>
      <form className="space-y-4">
        <div className="space-y-4 border border-slate-200 p-4 rounded-xl mb-4">
          <div className="relative">
            <Input
              id="cardNumber"
              name="cardNumber"
              value=""
              placeholder="0000 0000 0000 0000"
              label="Número de tarjeta"
              className="w-full"
            />
            <figure className="absolute bottom-1/2 right-4 transform translate-y-[135%]">
              <img src={logoVisa} alt="" className="w-12" />
            </figure>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Vencimiento"
              className="w-full"
              id="expirationDate"
              name="expirationDate"
              value=""
              placeholder="MM/AA"
            />
            <Input label="CVV" className="w-full" id="cvv" name="cvv" value="" placeholder="1234" />
          </div>
          <Input
            label="Nombre del titular"
            className="w-full"
            id="customerName"
            name="customerName"
            value=""
            placeholder="Hugo Mendoza"
          />
        </div>
        <div className="space-y-4 border border-slate-200 p-4 rounded-xl">
          <Input
            label="Dirección de entrega"
            className="w-full"
            id="adress"
            name="adress"
            value=""
            placeholder="Calle 87 # 12-34"
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Teléfono"
              className="w-full"
              id="phone"
              name="phone"
              value=""
              placeholder="317 255 89 66"
            />
            <Input
              label="Ciudad"
              className="w-full"
              id="city"
              name="city"
              value=""
              placeholder="317 255 89 66"
            />
          </div>
        </div>
        <StepFooter onBack={decrementStep} onNext={incrementStep} backLabel="Cerrar" />
      </form>
    </ModalLayout>
  );
};

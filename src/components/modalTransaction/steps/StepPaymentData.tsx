import { useEffect, useState } from 'react';
import { useChangeSteps } from '../../../hooks/useChangeSteps';
import { useDataTrasaction } from '../../../hooks/useDataTrasaction';
import { StepFooter } from './StepFooter';
import { ModalLayout } from '../../layouts/ModalLayout';
import { Input } from '../../ui/Input';

import logoVisa from '../../../assets/svg/logo-visa.svg';
import mastercard from '../../../assets/svg/logo-mc.svg';

interface Props {
  isOpen: boolean;
}

export const StepPaymentData = ({ isOpen }: Props) => {
  const { decrementStep } = useChangeSteps();
  const [brand, setBrand] = useState<string | null>(null);
  const {
    formState,
    errors,
    loading,
    onInputChange,
    formatCreditCard,
    splitExpirationDate,
    onRegisterDataTransaction,
    clearError,
  } = useDataTrasaction();

  const { adress, cardHolder, cardNumber, city, cvv, expirationDate, name, phone, email } =
    formState;

  const detectBrand = (value: string) => {
    const visa = value.startsWith('4');
    const mastercard = value.startsWith('5');

    if (visa) {
      setBrand('visa');
      return;
    }
    if (mastercard) {
      setBrand('mastercard');
      return;
    }
    setBrand(null);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onRegisterDataTransaction(formState);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    clearError(e.target.name);
  };

  useEffect(() => {
    detectBrand(cardNumber);
  }, [cardNumber]);

  return (
    <ModalLayout title="Datos de pago y entrega" isOpen={isOpen} onClose={decrementStep}>
      <form className="space-y-4" onSubmit={onSubmit} noValidate>
        <div className="space-y-4 border border-slate-200 p-4 rounded-xl mb-4">
          <div className="relative">
            <Input
              id="cardNumber"
              name="cardNumber"
              value={cardNumber}
              placeholder="0000 0000 0000 0000"
              label="Número de tarjeta"
              className="w-full"
              onChange={(e) => formatCreditCard(e.target.value)}
              maxLength={19}
              onBlur={handleBlur}
              error={!!errors.cardNumber}
              warningMessage={errors.cardNumber}
            />
            {brand === 'visa' && (
              <figure
                className={`absolute top-1/2 right-4 transform  ${
                  errors.cardNumber ? '-translate-y-[30%]' : 'translate-y-[30%]'
                }`}
              >
                <img src={logoVisa} className="w-12" />
              </figure>
            )}
            {brand === 'mastercard' && (
              <figure
                className={`absolute top-1/3 right-2 transform  ${
                  errors.cardNumber ? '-translate-y-[0%]' : 'translate-y-[25%]'
                }`}
              >
                <img src={mastercard} className="w-12" />
              </figure>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Vencimiento"
              className="w-full"
              id="expirationDate"
              name="expirationDate"
              value={expirationDate}
              placeholder="MM/AA"
              onChange={(e) => splitExpirationDate(e.target.value)}
              onBlur={handleBlur}
              error={!!errors.expirationDate}
              warningMessage={errors.expirationDate}
            />
            <Input
              label="CVV"
              className="w-full"
              id="cvv"
              name="cvv"
              maxLength={4}
              value={cvv}
              placeholder="1234"
              onChange={onInputChange}
              onBlur={handleBlur}
              error={!!errors.cvv}
              warningMessage={errors.cvv}
            />
          </div>
          <Input
            label="Nombre del titular"
            className="w-full"
            id="cardHolder"
            name="cardHolder"
            value={cardHolder}
            placeholder="Hugo Mendoza"
            onChange={onInputChange}
            onBlur={handleBlur}
            error={!!errors.cardHolder}
            warningMessage={errors.cardHolder}
          />
        </div>
        <div className="space-y-4 border border-slate-200 p-4 rounded-xl">
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Nombre"
              className="w-full"
              id="name"
              name="name"
              value={name}
              placeholder="Hugo Mendoza"
              onChange={onInputChange}
              onBlur={handleBlur}
              error={!!errors.name}
              warningMessage={errors.name}
            />
            <Input
              label="Correo electronico"
              className="w-full"
              id="email"
              name="email"
              value={email}
              placeholder="tu@correo.com"
              onChange={onInputChange}
              onBlur={handleBlur}
              error={!!errors.email}
              warningMessage={errors.email}
            />
          </div>
          <div>
            <Input
              label="Dirección de entrega"
              className="w-full col-span-1 col-end-2"
              id="adress"
              name="adress"
              value={adress}
              placeholder="Calle 87 # 12-34"
              onChange={onInputChange}
              onBlur={handleBlur}
              error={!!errors.adress}
              warningMessage={errors.adress}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Teléfono"
              className="w-full"
              id="phone"
              name="phone"
              value={phone}
              placeholder="317 255 89 66"
              onChange={onInputChange}
              onBlur={handleBlur}
              error={!!errors.phone}
              warningMessage={errors.phone}
            />
            <Input
              label="Ciudad"
              className="w-full"
              id="city"
              name="city"
              value={city}
              placeholder="Bogotá"
              onChange={onInputChange}
              onBlur={handleBlur}
              error={!!errors.city}
              warningMessage={errors.city}
            />
          </div>
        </div>
        <StepFooter
          disabled={loading}
          onBack={decrementStep}
          buttonNextType="submit"
          backLabel="Cerrar"
        />
      </form>
    </ModalLayout>
  );
};

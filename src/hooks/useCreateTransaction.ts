import { useState } from 'react';
import { createCustomer } from '../services/customer.service';
import { createProviderTransaction } from '../services/provider.service';
import { createLocalTransaction } from '../services/transaction.service';
import { useEcommerceStore } from '../store/store';
import { useChangeSteps } from './useChangeSteps';

export const useCreateTransaction = () => {
  const customer = useEcommerceStore((state) => state.customer);
  const product = useEcommerceStore((state) => state.product);
  const quantity = useEcommerceStore((state) => state.quantity);
  const token = useEcommerceStore((state) => state.token);
  const storeIdProviderTransaction = useEcommerceStore((state) => state.storeIdTransaction);
  const storeLocalTransaction = useEcommerceStore((state) => state.storeLocalTransaction);
  const [loading, setLoading] = useState<boolean>(false);
  const { incrementStep } = useChangeSteps();

  async function onCreateTransaction() {
    setLoading(true);
    try {
      const { data: dataCustomer } = await createCustomer(customer);
      const customerId = dataCustomer.customer.id;

      const { data: localTransaction } = await createLocalTransaction({
        status: 'PENDING',
        product_amount: +`${product.price * quantity}00`,
        base_fee: 5000,
        delivery_fee: 15000,
        total_amount: +`${product.price * quantity + 5000 + 15000}00`,
        payment_method: 'CARD',
        customerId,
        productId: product.id,
      });

      const { transaction } = localTransaction;
      const { total_amount, id } = transaction;

      storeLocalTransaction(id);

      const { data } = await createProviderTransaction({
        amount_in_cents: +total_amount,
        currency: 'COP',
        customer_email: customer.email,
        reference: id,
        payment_method: {
          type: 'CARD',
          installments: 1,
          token,
        },
      });

      storeIdProviderTransaction(data.data.id);
      incrementStep();
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    customer,
    onCreateTransaction,
  };
};

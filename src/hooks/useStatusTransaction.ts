import { useEffect, useRef } from 'react';
import { validateStatusTransaction } from '../services/transaction.service';
import { useEcommerceStore } from '../store/store';
import { useChangeSteps } from './useChangeSteps';

export const useStatusTransaction = () => {
  const idProviderTransaction = useEcommerceStore((state) => state.idTransaction);
  const saveTransaction = useEcommerceStore((state) => state.storeStatusTransaction);
  const { setStep } = useChangeSteps();

  const pollingRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isPollingActive = useRef(true);

  const onValidateStatusTransaction = async () => {
    const { data } = await validateStatusTransaction(idProviderTransaction);
    const statusTransaction = data.data.status;

    if (statusTransaction === 'APPROVED' || statusTransaction === 'DECLINED') {
      setStep(4);
      saveTransaction(statusTransaction);
      isPollingActive.current = false;
      return true;
    }
    return false;
  };

  const pollStatus = async () => {
    if (!isPollingActive.current) return;
    const isFinal = await onValidateStatusTransaction();
    if (!isFinal && isPollingActive.current) {
      pollingRef.current = setTimeout(pollStatus, 5000);
    }
  };

  useEffect(() => {
    isPollingActive.current = true;
    pollStatus();
    return () => {
      isPollingActive.current = false;
      if (pollingRef.current) clearTimeout(pollingRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idProviderTransaction]);
};

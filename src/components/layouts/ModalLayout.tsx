import { useRef, useEffect } from 'react';

interface ModalLayoutProps {
  isOpen: boolean;
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

export const ModalLayout = ({ isOpen, onClose, title, children }: ModalLayoutProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }

    return () => {
      if (dialog.open) dialog.close();
    };
  }, [isOpen]);

  const handleClose = () => {
    onClose();
  };

  const handleEscKeydown = (e: React.KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className="backdrop:bg-black/60 max-w-lg w-11/12 rounded-xl bg-white px-4 sm:px-8 pb-4 sm:pb-6 pt-3 focus:outline-none m-auto"
      onKeyDown={handleEscKeydown}
    >
      <header className="flex justify-center items-center py-3 text-center">
        <h2 className="font-semibold text-slate-600">{title}</h2>
      </header>
      <section className="py-3">{children}</section>
    </dialog>
  );
};

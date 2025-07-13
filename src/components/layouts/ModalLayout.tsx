import { LoaderCircle } from 'lucide-react';
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

  return (
    <dialog
      ref={dialogRef}
      className="backdrop:bg-black backdrop:bg-opacity-50 max-w-lg w-11/12 rounded-xl bg-white shadow-xl px-4 sm:px-8 pb-4 sm:pb-6 pt-3 focus:outline-none mx-auto my-auto"
      onClick={handleClose}
    >
      <header className="flex justify-between items-center py-3">
        <h2 className="font-semibold text-slate-600">{title}</h2>
        <LoaderCircle className="animate-spin" />
        {/* <Button
          onClick={handleClose}
          variant="icon"
          className="hover:bg-transparent focus:shadow-none focus:outline-none"
        >
          <IconSquareRoundedX size={26} color="#f58774" />
        </Button> */}
      </header>
      <hr />
      <section className="py-3">{children}</section>
    </dialog>
  );
};

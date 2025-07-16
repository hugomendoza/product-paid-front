import { Button } from '../../ui/Button/Button';

interface Props {
  onBack: () => void;
  onNext?: () => void;
  backLabel?: string;
  nextLabel?: string;
  disabled?: boolean;
  buttonNextType?: 'button' | 'submit';
  buttonBackType?: 'button' | 'submit';
}

export const StepFooter = ({
  onBack,
  onNext,
  disabled = false,
  backLabel = 'Volver',
  nextLabel = 'Continuar',
  buttonNextType = 'button',
  buttonBackType = 'button',
}: Props) => {
  return (
    <footer
      className={`flex justify-end gap-4 sm:max-w-2/3 ml-auto mr-0 ${
        disabled && 'pointer-events-none opacity-30'
      }`}
    >
      <Button variant="outline" type={buttonBackType} onClick={onBack}>
        {backLabel}
      </Button>
      <Button loading={disabled} variant="secondary" type={buttonNextType} onClick={onNext}>
        {nextLabel}
      </Button>
    </footer>
  );
};

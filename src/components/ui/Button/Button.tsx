import type { ComponentProps } from 'react';
import { tw } from '../../../utils/tw';
import { buttonStyles } from './ButtonStyles';
import { LoaderCircle } from 'lucide-react';

type ButtonProps = ComponentProps<'button'> & {
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'destructive' | 'outline' | 'icon';
};

export const Button = ({
  children,
  variant = 'primary',
  className = '',
  loading = false,
  ...rest
}: ButtonProps) => {
  return (
    <button className={tw(buttonStyles({ variant }), className)} {...rest}>
      {loading ? <LoaderCircle className="animate-spin" /> : children}
    </button>
  );
};

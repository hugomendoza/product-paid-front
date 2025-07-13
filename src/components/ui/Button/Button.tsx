import type { ComponentProps } from 'react';
import { tw } from '../../../utils/tw';
import { buttonStyles } from './ButtonStyles';
import { IconLoader2 } from '@tabler/icons-react';

type ButtonProps = ComponentProps<'button'> & {
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'icon' | 'dark';
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
      {loading ? (
        <div className="w-full flex justify-center">
          <IconLoader2 className="animate-spin" />
        </div>
      ) : (
        children
      )}
    </button>
  );
};

import type { ComponentProps } from 'react';
import { tw } from '../../utils/tw';
import { TriangleAlert } from 'lucide-react';

type InputProps = ComponentProps<'input'> & {
  label?: string;
  error?: boolean;
  warningMessage?: string;
  className?: string;
};

export const Input = ({
  id,
  type = 'text',
  label = '',
  error = false,
  warningMessage = '',
  className = '',
  ...rest
}: InputProps) => {
  return (
    <fieldset>
      {label && (
        <label htmlFor={id} className="block text-sm text-luc-purple-400 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          type={type}
          name={id}
          className={tw(
            'focus-visible:outline-none p-3 border focus:ring-0 focus-visible:ring-0 w-full text-sm rounded-lg border-luc-purple-400 text-luc-purple placeholder:text-gray-400',
            className,
          )}
          {...rest}
        />
      </div>
      {error && (
        <p className="text-red-500 text-xs mt-1 flex items-center gap-2">
          <TriangleAlert /> {warningMessage}
        </p>
      )}
    </fieldset>
  );
};

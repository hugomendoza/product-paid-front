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
        <label htmlFor={id} className="block text-sm mb-2 text-slate-500">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          type={type}
          name={id}
          className={tw(
            'focus-visible:outline-none h-10 px-4 border border-slate-300 focus:ring-0 focus-visible:ring-0 rounded-lg placeholder:text-gray-400 text-slate-700',
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

import { Minus, Plus } from 'lucide-react';
import { Button } from './Button/Button';
import { Input } from './Input';

interface Props {
  value: number;
  disabled?: boolean;
  increment: () => void;
  decrement: () => void;
}

export function Counter({ value = 0, decrement, increment, disabled = false }: Props) {
  return (
    <div className="flex">
      <Button onClick={decrement} variant="icon" disabled={disabled} className="rounded-r-none">
        <Minus size={16} />
      </Button>
      <Input
        disabled={disabled}
        type="text"
        value={value}
        className="size-10 rounded-none"
        readOnly
      />
      <Button onClick={increment} variant="icon" disabled={disabled} className="rounded-l-none">
        <Plus size={16} />
      </Button>
    </div>
  );
}

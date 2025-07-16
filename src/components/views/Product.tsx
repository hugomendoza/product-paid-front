import { CreditCard, PackageOpen } from 'lucide-react';
import { Button } from '../ui/Button/Button';
import { Counter } from '../ui/Counter';
import { useStoreProduct } from '../../hooks/useStoreProduct';
import type { Product } from '../../interfaces/product.interface';
import { useCounter } from '../../hooks/useCounter';

export const ProductPage = (props: Product) => {
  const { name, description, price, stock, image_url } = props;
  const { counter, increment, decrement, stockLeft } = useCounter(stock);
  const { startTransaction } = useStoreProduct();

  return (
    <article className="container sm:grid sm:grid-cols-2 gap-4 mt-8">
      <header>
        <figure className="aspect[3/4] max-w-2xs sm:max-w-none mx-auto">
          <img
            src={image_url}
            alt={name}
            className="w-full h-full object-cover rounded-xl shadow-[0_5px_15px_rgb(0,0,0,0.5)]"
            loading="lazy"
          />
        </figure>
      </header>
      <div className="p-6 space-y-2 text-slate-400">
        <h1 className="font-bold text-2xl text-black">{name}</h1>
        <p className="text-sm">{description}</p>
        <div className="flex justify-between text-black my-6">
          <p className="text-xl font-black">
            ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
          </p>
          <div className="flex gap-2 items-center">
            <PackageOpen color="#314158" />
            <span className="bg-slate-700 text-slate-100 flex items-center justify-center gap-3 leading-none px-3 rounded-full text-xs font-semibold py-1">
              {stockLeft} disponibles
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center my-6">
          <div className="flex-1">
            <Counter decrement={decrement} increment={increment} value={counter} />
          </div>
          <div className="flex-1 text-right">
            <p className="text-lg font-bold text-black flex items-center justify-end">
              <span className="text-xs mr-2">Valor total: </span>$
              {(price * counter).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            </p>
          </div>
        </div>
        <Button disabled={counter === 0} onClick={() => startTransaction(props, counter)}>
          <CreditCard /> Paga con tarjeta de crédito
        </Button>
      </div>
    </article>
  );
};

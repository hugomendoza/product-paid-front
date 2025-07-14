import { CreditCard, PackageOpen } from 'lucide-react';
import { Button } from '../ui/Button/Button';
import { Counter } from '../ui/Counter';
import { useEcommerceStore } from '../../store/store';

export const Product = () => {
  const increment = useEcommerceStore((state) => state.increment);

  return (
    <article className="container sm:grid sm:grid-cols-2 gap-4 mt-8">
      <header>
        <figure className="aspect[3/4] max-w-2xs sm:max-w-none mx-auto">
          <img
            src="https://res.cloudinary.com/djfxyhasn/image/upload/v1716234904/cover-books/o5jxnnjnufzxoakglo0l.jpg"
            alt="Product name"
            className="w-full h-full object-cover rounded-xl shadow-[0_5px_15px_rgb(0,0,0,0.5)]"
            loading="lazy"
          />
        </figure>
      </header>
      <div className="p-6 space-y-2 text-slate-400">
        <h1 className="font-bold text-2xl text-black">Product name</h1>
        <p className="">Product description</p>
        <div className="flex justify-between text-black">
          <p className="text-xl font-black">$200</p>
          <div className="flex gap-2 items-center">
            <PackageOpen color="#314158" />
            <span className="bg-slate-700 text-slate-100 flex items-center justify-center gap-3 leading-none px-3 rounded-full text-xs font-semibold py-1">
              4 disponibles
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center my-6">
          <div className="flex-1">
            <Counter
              decrement={() => console.log('decrement')}
              increment={() => console.log('increment')}
              value={1}
            />
          </div>
          <div className="flex-1 text-right">
            <p className="text-xl font-bold text-black flex items-center justify-end">
              <span className="text-sm mr-2">Valor total: </span>$0
            </p>
          </div>
        </div>
        <Button onClick={() => increment(1)}>
          <CreditCard /> Paga con tarjeta de crédito
        </Button>
      </div>
    </article>
  );
};

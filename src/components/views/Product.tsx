import { CreditCard } from 'lucide-react';

export const Product = () => {
  return (
    <article className="container sm:grid sm:grid-cols-2 mt-8">
      <header>
        <figure className="aspect[3/4] max-w-2xs sm:max-w-none mx-auto">
          <img
            src="https://res.cloudinary.com/djfxyhasn/image/upload/v1716234904/cover-books/o5jxnnjnufzxoakglo0l.jpg"
            alt="Product name"
            className="w-full h-full object-cover rounded-xl shadow-[0_5px_15px_rgb(0,0,0,0.5)] "
          />
        </figure>
      </header>
      <div className="p-4 space-y-2 text-slate-400">
        <h1 className="font-bold text-2xl text-black">Product name</h1>
        <p className="">Product description</p>
        <div className="flex justify-between text-black">
          <p className="text-xl font-black">$200</p>
          <p className="bg-cyan-100 text-cyan-600 leading-7 px-3 rounded-full text-xs font-semibold">
            4 disponibles
          </p>
        </div>
        <button className="mt-4 w-full text-emerald-600 bg-emerald-100 border border-emerald-300 py-2 rounded-lg transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-3">
          <CreditCard /> Pay with credit card
        </button>
      </div>
    </article>
  );
};

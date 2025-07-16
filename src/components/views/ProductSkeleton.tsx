export const ProductPageSkeleton = () => {
  return (
    <article className="container sm:grid sm:grid-cols-2 gap-4 mt-8 animate-pulse">
      <header>
        <figure className="aspect-[3/4] max-w-2xs sm:max-w-none mx-auto">
          <div className="w-full h-full bg-gray-300 rounded-xl shadow-[0_5px_15px_rgb(0,0,0,0.5)]"></div>
        </figure>
      </header>
      <div className="p-6 space-y-4">
        <div className="h-8 w-3/4 bg-gray-300 rounded mb-4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        </div>

        <div className="flex justify-between mt-4">
          <div className="h-6 w-1/4 bg-gray-300 rounded"></div>
          <div className="h-6 w-1/4 bg-gray-300 rounded"></div>
        </div>

        <div className="flex justify-between items-center my-6">
          <div className="h-10 w-32 bg-gray-300 rounded-lg"></div>
          <div className="h-6 w-24 bg-gray-300 rounded"></div>
        </div>

        <div className="h-12 w-full bg-gray-300 rounded-lg"></div>
      </div>
    </article>
  );
};

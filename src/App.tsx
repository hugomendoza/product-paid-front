import { ModalTransaction, Nav, ProductPage, ProductPageSkeleton } from './components';
import { useFetch } from './hooks/useFetch';

function App() {
  const { data, isLoading } = useFetch();

  console.log({ data });

  return (
    <>
      <Nav />
      {isLoading ? <ProductPageSkeleton /> : <ProductPage {...data} />}
      <ModalTransaction />
    </>
  );
}

export default App;

import { StoreProvider } from './context/StoreContext';
import { ProductsProvider } from './context/ProductsContext';
import { Checkout, Footer, Header, Layout, List } from './components';

function App() {
  return (
    <Layout>
      <Header>Estampitiency</Header>
      <StoreProvider>
        <ProductsProvider>
          <List />
        </ProductsProvider>
        <Checkout />
      </StoreProvider>
      <Footer />
    </Layout>
  );
}

export default App;
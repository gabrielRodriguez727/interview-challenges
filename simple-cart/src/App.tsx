import { useEffect, useState } from "react";

import api from "./api";
import { Product } from "./types";

import { Card, Checkout, Footer, Header, Layout, List } from "./components";



function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const quantity = 3
  const totalPrice = 12

  useEffect(() => {
    api.list().then(setProducts);
  }, []);



  return (
    <Layout>
      <Header>Estampitiency</Header>
      <List>
        {products.map((product: Product) => (
          <Card key={product.id} product={product} />
        ))}
      </List>
      <Checkout {...{ quantity, totalPrice }} />
      <Footer />
    </Layout>
  );
}

export default App;

import { useEffect, useState } from "react";

import api from "./api";
import { Product, ProductItem, CartOp } from "./types";

import { Card, Checkout, Footer, Header, Layout, List } from "./components";



function App() {
  const [products, setProducts] = useState<Product[]>([]);
  // const [cart, setCart] = useState<Map<string, ProductItem>>(new Map())
  const [cart, setCart] = useState<ProductItem[]>([])

  const [quantity, totalPrice] = cart.reduce(function (accu, val) {
    accu[0] += val.quantity
    accu[1] += val.quantity * val.product.price
    return accu
  }, [0, 0])
  // let quantity = 0
  // let totalPrice = 0
  // for (let [id, productItem] of cart) {
  //   quantity += productItem.quantity
  //   totalPrice += productItem.quantity * productItem.product.price
  // }

  useEffect(() => {
    api.list().then(setProducts);
  }, []);

  function handleClickCardProduct({ product, cartOp }: { product: Product, cartOp: CartOp }) {
    const addedProduct = cart.find(e => e.product.id === product.id)
    if (addedProduct) {
      if (addedProduct.quantity === 1 && cartOp === CartOp.REMOVE) {
        setCart(cart.filter(e => e.product.id !== product.id))
      } else {
        const cartCopy = cart.map(function (e) {
          if (e.product.id === product.id) {
            const quantity = cartOp === CartOp.ADD ? ++e.quantity : --e.quantity
            return {
              quantity,
              product: e.product
            }
          } else {
            return { ...e }
          }
        })
        setCart(cartCopy)
      }

    } else {
      setCart([...cart, { quantity: 1, product }])
    }
  }



  return (
    <Layout>
      <Header>Estampitiency</Header>
      <List>
        {
          products.map((product: Product) => {
            const cartQuantity = cart.find(e => e.product.id === product.id)?.quantity ?? 0
            return (<Card key={product.id} product={product} cartQuantity={cartQuantity} handleClickCardProduct={handleClickCardProduct} />)
          })
        }
      </List>
      <Checkout {...{ quantity, totalPrice }} />
      <Footer />
    </Layout>
  );
}

export default App;

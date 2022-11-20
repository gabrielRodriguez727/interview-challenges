import { createContext, useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import { Product, CartItem, CartOp } from '../types'


interface StoreContextInterface {
    products: Product[];
    quantity: number;
    totalPrice: number;
    handleClickCardProduct: Function;
    cart: CartItem[];

}

export const StoreContext = createContext<StoreContextInterface>({
    products: [],
    quantity: 0,
    totalPrice: 0,
    cart: [],
    handleClickCardProduct: () => { }
});

export function StoreProvider({ children }: { children: JSX.Element | JSX.Element[] }) {
    const [products] = useProducts()
    const [cart, setCart] = useState<CartItem[]>([])



    const [quantity, totalPrice] = cart.reduce(function (accu, val) {
        accu[0] += val.quantity
        accu[1] += val.quantity * val.product.price
        return accu
    }, [0, 0])

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
        <StoreContext.Provider value={{ cart, products, quantity, totalPrice, handleClickCardProduct }}>
            {/* <TasksDispatchContext.Provider value={dispatch}> */}
            {children}
            {/* </TasksDispatchContext.Provider> */}
        </StoreContext.Provider>
    );
}


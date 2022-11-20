import { createContext } from 'react';
import { useProducts } from '../hooks/useProducts';
import { Product } from '../types'


interface ProductsContextInterface {
    products: Product[];
}

export const ProductsContext = createContext<ProductsContextInterface>({
    products: [],
});

export function ProductsProvider({ children }: { children: JSX.Element | JSX.Element[] }) {
    const [products] = useProducts()

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    );
}


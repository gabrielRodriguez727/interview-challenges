import { useEffect, useState } from 'react'
import api from '../api';
import { Product } from '../types'

function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        api.list().then(setProducts);
    }, []);

    return [products]
}

export { useProducts }
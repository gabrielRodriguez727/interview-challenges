import styles from './List.module.css'
import { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsContext';
import { Product } from '../../types';
import { Card } from '../../components';


function List() {
    const { products } = useContext(ProductsContext)
    return (
        <section className={styles.list_container}>
            {
                products.map((product: Product) => {
                    return (
                        <Card
                            key={product.id}
                            product={product}
                        />)
                })
            }
        </section>
    )
}

export { List }
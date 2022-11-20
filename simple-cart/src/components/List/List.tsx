import styles from './List.module.css'
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { Product } from '../../types';
import { Card } from '../../components';


function List() {
    const { products } = useContext(StoreContext)
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
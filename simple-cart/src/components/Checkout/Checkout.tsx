import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

import styles from './Checkout.module.css'

function Checkout() {
    const { quantity, totalPrice } = useContext(StoreContext)
    return (
        <aside className={styles.checkout}>
            <button>{quantity} productos (total: ${totalPrice})</button>
        </aside>
    )
}

export { Checkout }
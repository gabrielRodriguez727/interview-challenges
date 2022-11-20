import styles from './Card.module.css'
import { useContext } from 'react';
import { Product, CartOp } from '../../types';
import { StoreContext } from '../../context/StoreContext';

interface CardProps {
    product: Product,
}

function Card({  product }: CardProps) {

    const { cart, handleClickCardProduct } = useContext(StoreContext)

    const cartQuantity = cart.find(e => e.product.id === product.id)?.quantity ?? 0
    return (
        <article className={styles.card}>
            <img src={product.image} />
            <div>
                <p>{product.title}</p>
                <p>{product.description}</p>
            </div>
            {cartQuantity ?
                <div className={styles.buttons_wrapper}>
                    <button onClick={() => { handleClickCardProduct({ product, cartOp: CartOp.REMOVE }) }}>-</button>
                    <span>{cartQuantity}</span>
                    <button onClick={() => { handleClickCardProduct({ product, cartOp: CartOp.ADD }) }}>+</button>
                </div> :
                <button onClick={() => { handleClickCardProduct({ product, cartOp: CartOp.ADD }) }}>Agregar</button>
            }
        </article>
    )
}

export { Card }
import styles from "./Card.module.css"
import { Product, CartOp } from "../../types";

interface CardProps {
    cartQuantity: number,
    product: Product,
    handleClickCardProduct: Function,
}

function Card({ cartQuantity, product, handleClickCardProduct }: CardProps) {




    return (
        <article className={styles.card}>
            <img src={product.image} />
            <div>
                <p>{product.title}</p>
                <p>{product.description}</p>
            </div>
            {cartQuantity ?
                <div className={styles.buttons}>
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
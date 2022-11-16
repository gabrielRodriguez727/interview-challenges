import styles from "./Card.module.css"
import { Product } from "../../types";

interface CardProps {
    product: Product
}

function Card({ product }: CardProps) {

    return (
        <article className={styles.card}>
            <img src={product.image} />
            <div>
                <p>{product.title}</p>
                <p>{product.description}</p>
            </div>
            <button>Agregar</button>
        </article>
    )
}

export { Card }
import styles from "./Checkout.module.css"

interface CheckoutProps {
    quantity: number,
    totalPrice: number
}

function Checkout({ quantity, totalPrice }: CheckoutProps) {
    return (
        <aside className={styles.checkout}>
            <button>{quantity} productos (total: ${totalPrice})</button>
        </aside>
    )
}

export { Checkout }
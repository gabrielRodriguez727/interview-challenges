import styles from "./List.module.css"

interface ListProps {
    children: JSX.Element[]
}

function List({ children }: ListProps) {
    return (
        <section className={styles.list_container}>
            {children}
        </section>
    )
}

export { List }
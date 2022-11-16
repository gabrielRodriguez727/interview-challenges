import styles from "./Layout.module.css"

interface LayoutProps {
    children: JSX.Element[]
}

function Layout({ children }: LayoutProps) {
    return (
        <main className={styles.layout}>
            {children}
        </main>
    )
}

export { Layout }
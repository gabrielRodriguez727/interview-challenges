import styles from './Header.module.css'

interface HeaderProps {
    children: JSX.Element | string
}

function Header({ children }: HeaderProps) {
    return (
        <header className={styles.header}>{children}</header>
    )
}

export { Header }
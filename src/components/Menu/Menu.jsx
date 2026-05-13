import styles from './Menu.module.css';

export default function Menu() {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.logoContainer}>
                    <div className={styles.logoGlow}></div>
                    <p className={styles.brand}>
                        Laís Guedes
                    </p>
                </div>

                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <a href="#about">
                            Sobre
                        </a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#skills">
                            Especialidades
                        </a>
                    </li>

                    <li className={styles.navItem}>
                        <a href="#projects">
                            Projetos
                        </a>
                    </li>

                    <li className={styles.navItem}>
                        <a href="#contact">
                            Contato
                        </a>
                    </li>

                </ul>

                <a
                    href="#contact"
                    className={styles.contactButton}
                >
                    Vamos conversar
                </a>

            </nav>

        </header>
    );
}
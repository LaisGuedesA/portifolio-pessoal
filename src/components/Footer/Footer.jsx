import styles from './Footer.module.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.brand}>
                    <p className={styles.name}>Laís Guedes</p>
                    <p className={styles.copy}>© {new Date().getFullYear()} — Todos os direitos reservados</p>
                </div>

                <nav className={styles.nav}>
                    <a href="#projects" className={styles.link}>Projetos</a>
                    <a href="#skills" className={styles.link}>Skills</a>
                    <a href="#contact" className={styles.link}>Contato</a>
                </nav>

                <div className={styles.socials}>
                    <a href="#" aria-label="GitHub" className={styles.icon}><FaGithub /></a>
                    <a href="#" aria-label="LinkedIn" className={styles.icon}><FaLinkedin /></a>
                    <a href="mailto:lais@example.com" aria-label="Email" className={styles.icon}><FaEnvelope /></a>
                </div>
            </div>
        </footer>
    )
}
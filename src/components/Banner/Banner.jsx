import styles from './Banner.module.css';

import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Banner() {
    return (
        <header className={styles.heroSection} id="about">

            {/* LEFT SIDE */}

            <section className={styles.sectionLeft}>

                <div className={styles.badge}>
                    <span className={styles.badgeGlow}></span>

                    <p className={styles.subtitle}>
                        Hello, I'm 👋🏽
                    </p>
                </div>

                <div className={styles.headingContainer}>

                    <h1 className={styles.name}>
                        Laís Guedes
                    </h1>

                    <h2 className={styles.title}>
                        FULL STACK
                        <span> DEVELOPER</span>
                    </h2>

                </div>

                <div className={styles.textContainer}>
                    <p className={styles.phrase}>
                        Transformo ideias em experiências digitais modernas,
                        acessíveis e impactantes.
                    </p>

                    <p className={styles.phrase}>
                        Vamos construir algo incrível juntos?
                    </p>
                </div>

                <div className={styles.actions}>

                    <a
                        href="https://github.com/LaisGuedesA?tab=repositories"
                        className={styles.projectsButton}
                        target='_blank'
                    >
                        View Projects
                        <FiArrowUpRight />
                    </a>

                    <a
                        href="/public/curriculo.lais"
                        className={styles.resumeButton}
                        target='_blank'
                    >
                        Abrir currículo
                    </a>

                </div>

                <div className={styles.socials}>

                    <a href="https://github.com/LaisGuedesA" target='_blank'>
                        <FaGithub />
                    </a>

                    <a href="https://www.linkedin.com/in/lais-almeida-guedes-aa0233394/" target='_blank'>
                        <FaLinkedinIn />
                    </a>

                </div>

            </section>

            {/* RIGHT SIDE */}

            <section className={styles.sectionRight}>

                <div className={styles.imageContainer}>

                    <div className={styles.glow}></div>

                    <div className={styles.cardBlur}></div>

                    <img
                        className={styles.profileImg}
                        src="./perfil.png"
                        alt="Imagem autodescritiva"
                    />

                </div>

            </section>

        </header>
    );
}
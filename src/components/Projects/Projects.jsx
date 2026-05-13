import styles from "./Projects.module.css";
import { useEffect, useRef, useState } from "react";

import { FaNetworkWired, FaGithub } from "react-icons/fa";
import { CgWebsite, CgLayoutList } from "react-icons/cg";
import { FiArrowUpRight } from "react-icons/fi";

function LazyImage({ base, alt, className, sizes }) {
    const imgRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const img = imgRef.current;
        if (!img) return;

        if ('IntersectionObserver' in window) {
            const obs = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setIsVisible(true);
                            obs.unobserve(img);
                        }
                    });
                },
                { rootMargin: '200px' }
            );
            obs.observe(img);
            return () => obs.disconnect();
        } else {
            setIsVisible(true);
        }
    }, []);

    const img400 = `${base}?w=400&auto=format&fit=crop&q=60`;
    const img800 = `${base}?w=800&auto=format&fit=crop&q=75`;
    const img1200 = `${base}?w=1200&auto=format&fit=crop&q=80`;

    return (
        <img
            ref={imgRef}
            src={isVisible ? img800 : undefined}
            srcSet={isVisible ? `${img400} 400w, ${img800} 800w, ${img1200} 1200w` : undefined}
            sizes={sizes || "(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"}
            loading="lazy"
            decoding="async"
            alt={alt}
            className={`${className} ${loaded ? styles.loaded : ''}`}
            onLoad={() => setLoaded(true)}
        />
    );
}

export default function Projects() {
    const projects = [
        {
            id: 1,
            icone: <FaNetworkWired />,
            titulo: "Workit",
            descr: "Plataforma moderna com foco em performance, responsividade e experiência do usuário.",
            img: "./workit.png",
            ferramentas: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/LaisGuedesA/workit.git",
            demo: "https://workit-lyart.vercel.app/"
        },

        {
            id: 2,
            icone: <CgWebsite />,
            titulo: "Website Snap",
            descr: "Landing page interativa com design minimalista e animações suaves.",
            img: "./snap.png",
            ferramentas: ["React", "CSS Modules", "Framer Motion"],
            github: "https://github.com/LaisGuedesA/snap.git",
            demo: "https://snap-ra8hv6rg9-lais-guedes-projects.vercel.app/"
        },

        {
            id: 3,
            icone: <CgLayoutList />,
            titulo: "Portfólio Moderno",
            descr: "Portfólio pessoal inspirado em interfaces modernas como Linear e Vercel.",
            img: "./perfil.png",
            ferramentas: ["Next.js", "TypeScript", "CSS Modules"],
            github: "https://github.com/LaisGuedesA/portifolio-pessoal",
            demo: "https://portifolio-pessoal-rzz5.vercel.app/"
        }
    ];

    return (
        <section className={styles.projectsSection} id="projects">

            <div className={styles.heading}>
                <div className={styles.headContainerLeft}>
                    <h4 className={styles.headingSubtitle}>Meus Projetos</h4>
                </div>
                <div className={styles.headContainerRight}>
                    <p className={styles.headingDescription}>Transformo ideias complexas em soluções digitais elegantes e intuitivas, combinando proficiência técnica com um olhar apurado para a experiência do usuário.</p>
                </div>
            </div>

            <div className={styles.carousel}>

                {projects.map((projeto) => (
                    <article
                        className={styles.card}
                        key={projeto.id}
                    >

                        <div className={styles.blur}></div>

                        <div className={styles.imageWrapper}>
                            <LazyImage base={projeto.img} alt={projeto.titulo} className={styles.image} />
                        </div>

                        <div className={styles.content}>

                            <div className={styles.top}>

                                <div className={styles.icon}>
                                    {projeto.icone}
                                </div>

                                <h3 className={styles.projectTitle}>
                                    {projeto.titulo}
                                </h3>

                            </div>

                            <p className={styles.projectDescription}>
                                {projeto.descr}
                            </p>

                            <div className={styles.techs}>

                                {projeto.ferramentas.map((tech) => (
                                    <span
                                        key={tech}
                                        className={styles.tech}
                                    >
                                        {tech}
                                    </span>
                                ))}

                            </div>

                            <div className={styles.buttons}>

                                <a
                                    href={projeto.github}
                                    className={styles.githubButton}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaGithub />
                                    GitHub
                                </a>

                                <a
                                    href={projeto.demo}
                                    className={styles.demoButton}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Live Demo
                                    <FiArrowUpRight />
                                </a>

                            </div>

                        </div>

                    </article>
                ))}

            </div>

        </section>
    );
}
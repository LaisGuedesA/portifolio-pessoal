import styles from "./Projects.module.css";

import { FaNetworkWired, FaGithub } from "react-icons/fa";
import { CgWebsite, CgLayoutList } from "react-icons/cg";
import { FiArrowUpRight } from "react-icons/fi";

export default function Projects() {
    const projects = [
        {
            id: 1,
            icone: <FaNetworkWired />,
            titulo: "Workit",
            descr: "Plataforma moderna com foco em performance, responsividade e experiência do usuário.",
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
            ferramentas: ["HTML", "CSS", "JavaScript"],
            github: "#",
            demo: "#"
        },

        {
            id: 2,
            icone: <CgWebsite />,
            titulo: "Website Snap",
            descr: "Landing page interativa com design minimalista e animações suaves.",
            img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
            ferramentas: ["React", "CSS Modules", "Framer Motion"],
            github: "#",
            demo: "#"
        },

        {
            id: 3,
            icone: <CgLayoutList />,
            titulo: "Portfólio Moderno",
            descr: "Portfólio pessoal inspirado em interfaces modernas como Linear e Vercel.",
            img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
            ferramentas: ["Next.js", "TypeScript", "CSS Modules"],
            github: "#",
            demo: "#"
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
                            <img
                                src={projeto.img}
                                alt={projeto.titulo}
                                className={styles.image}
                            />
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
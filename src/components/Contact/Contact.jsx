import styles from './Contact.module.css'

export default function Contact() {
    return (
        <section className={styles.contactSection} id="contact">
            <div className={styles.header}>
                <h2 className={styles.title}>Entre em contato</h2>
            </div>

            <div className={styles.columns}>
                <div className={styles.infoCard}>
                    <div className={styles.blur}></div>

                    <div className={styles.infoContent}>
                        <p className={styles.label}>Email</p>
                        <a
                            className={styles.link}
                            href="mailto:lais@example.com"
                        >
                            lais@example.com
                        </a>

                        <p className={styles.label}>Telefone</p>
                        <a
                            className={styles.link}
                            href="tel:+5511999999999"
                        >
                            +55 (11) 99999-9999
                        </a>
                    </div>
                </div>

                <form
                    className={styles.form}
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Seu nome"
                        required
                    />

                    <input
                        className={styles.input}
                        type="email"
                        placeholder="Seu email"
                        required
                    />

                    <textarea
                        className={styles.textarea}
                        placeholder="Mensagem"
                        required
                    ></textarea>

                    <button className={styles.button} type="submit">
                        Enviar mensagem
                    </button>
                </form>
            </div>
        </section>
    )
}
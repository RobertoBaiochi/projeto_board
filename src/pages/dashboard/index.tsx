import { GetServerSideProps } from "next";
import styles from "./styles.module.css";
import Head from "next/head";

import { getSession } from "next-auth/react";
import { TextArea } from "@/components/textarea";

import { FiShare2 } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";

export default function Dashboard() {
    return (
        <>
            <Head>
                <title>Painel de Tarefas</title>
            </Head>

            <main className={styles.main}>
                <section className={styles.content}>
                    <div className={styles.contentForm}>
                        <h1 className={styles.title}>Qual sua tarefa?</h1>

                        <form>
                            <TextArea placeholder="Digite qual sua tarefa..." />

                            <div className={styles.checkboxArea}>
                                <input
                                    id="tarefa_publica"
                                    type="checkbox"
                                    className={styles.checkbox}
                                />
                                <label htmlFor="tarefa_publica">
                                    Deixar tarefa publica?
                                </label>
                            </div>

                            <button type="submit" className={styles.button}>
                                Registrar
                            </button>
                        </form>
                    </div>
                </section>

                <section className={styles.taskContainer}>
                    <h1>Minhas Tarefas</h1>

                    <article className={styles.task}>
                        <div className={styles.tagContainer}>
                            <label className={styles.tag}>PUBLICO</label>
                            <button className={styles.shareButton}>
                                <FiShare2 size={22} color="#3284ff" />
                            </button>
                        </div>

                        <div className={styles.taskContent}>
                            <p>Tarefa de Exemplo</p>
                            <button className={styles.trashButton}>
                                <FaTrash size={24} color="#db4955" />
                            </button>
                        </div>
                    </article>
                </section>
            </main>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const session = await getSession({ req });

    if (!session?.user) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
};

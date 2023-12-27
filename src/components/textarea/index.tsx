import { HTMLProps } from "react";
import styles from "./styles.module.css";

export const TextArea = ({ ...rest }: HTMLProps<HTMLTextAreaElement>) => {
    return <textarea {...rest} className={styles.textarea} />;
};

import styles from "./index.module.css"

export function ContainerComment(){
    return (
        <div className={styles.container}>
            <input
            className={styles.input}
            type="text" />
            <button className={styles.button}>Send</button>
        </div>
    )
}
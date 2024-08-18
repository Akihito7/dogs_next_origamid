import styles from "./index.module.css"

export default function Post() {
  return (
    <div className={styles.containerMain}>
      <div className={styles.containerForm}>
        <div className={styles.inputContainer}>
          <label htmlFor="">Nome</label>
          <input type="text" />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="">Peso</label>
          <input type="text" />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="">Idade</label>
          <input type="text" />
        </div>

        <div>
          <input type="file" />
        </div>

        <button
          className={styles.button}
        >
          Enviar
        </button>

      </div>
    </div>
  );
}

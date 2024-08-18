import styles from "./index.module.css"

export default function CreateForm() {
  return (
    <div className={styles.containerMain}>
      <h2 className="title">Cadastre-se</h2>

      <div className={styles.containerForm}>


        <div className={styles.inputContainer}>
          <label htmlFor="">Usuário</label>
          <input type="text" />
        </div>


        <div className={styles.inputContainer}>
          <label htmlFor="">Email</label>
          <input type="text" />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="">Senha</label>
          <input type="password" />
        </div>

        <button
          className={styles.button}
        >
          Cadastrar
        </button>
      </div>
    </div>
  )
}
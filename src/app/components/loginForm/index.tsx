import Link from "next/link"
import styles from "./index.module.css"

export default function LoginForm() {
  return (
    <div className={styles.containerMain}>
      <h2>Login</h2>

      <div className={styles.containerForm}>
        <div className={styles.inputContainer}>
          <label htmlFor="">Usuário</label>
          <input type="text" />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="">Senha</label>
          <input type="password" />
        </div>

        <button
          className={styles.button}
        >
          Entrar
        </button>

        <Link href="/">Perdeu a senha?</Link>
      </div>

      <div className={styles.containerRegister}>
        <h3>Cadastre-se</h3>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <button>Cadastro</button>
      </div>
      
    </div>
  )
}
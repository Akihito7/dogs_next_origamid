'use client'

import { createUser } from "@/server-actions/createUser"
import styles from "./index.module.css"

function Button() {
  return (
    <button
      className={styles.button}
    >
      Cadastrar
    </button>
  )
}
export default function CreateForm() {
  async function handleSubmitForm(form: FormData) {
    event?.preventDefault();

    const user = {
      username: String(form.get("username")),
      email: String(form.get("email")),
      password: String(form.get("password"))
    }

    if (user.username && user.email && user.password) {
      await createUser(user)
    }

  };

  return (
    <div className={styles.containerMain}>
      <h2 className="title">Cadastre-se</h2>
      <form
        action={handleSubmitForm}
        className={styles.containerForm}
      >
        <div className={styles.inputContainer}>
          <label htmlFor="">Usuário</label>
          <input type="text" name="username" required/>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="">Email</label>
          <input type="text" name="email" required />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="">Senha</label>
          <input type="password" name="password" required/>
        </div>

        <Button />
      </form>
    </div>
  )
}
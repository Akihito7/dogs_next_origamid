'use client'

import { createUser } from "@/server-actions/createUser"
import styles from "./index.module.css"
import { login } from "@/server-actions/login";

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

    if (!form.get("username")) return alert("Preencha com um nome")
    if (!form.get("email")) return alert("Preencha com um email!")
    if (!form.get("password")) return alert("Informe uma senha!")
    const user = {
      username: String(form.get("username")),
      email: String(form.get("email")),
      password: String(form.get("password"))
    }
    const response =  await createUser(user);
    if(!response) return alert("Email ou usuário já cadastrado");

    await login(user.username, user.password);
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
          <input type="text" name="username" required />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="">Senha</label>
          <input type="password" name="password" required />
        </div>

        <Button />
      </form>
    </div>
  )
}
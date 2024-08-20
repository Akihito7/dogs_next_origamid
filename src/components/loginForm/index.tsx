'use client'
import Link from "next/link"
import styles from "./index.module.css"
import { useState } from "react"
import { login } from "@/server-actions/login";
import { useFormState, useFormStatus } from "react-dom";

function Button() {
  const status = useFormStatus();
  return (
    <button
      style={{
        opacity: status.pending ? .5 : 1
      }}
      disabled={status.pending}
      className={styles.button}
    >
      {status.pending ? "Carregando" : "Entrar"}
    </button>
  )
}

export default function LoginForm() {

  const [error, setError] = useState("");

  async function handleLogin(form: FormData) {
    event?.preventDefault()
    const username = String(form.get("username"));
    const password = String(form.get("password"));
    if (!username || !password) return alert("Preencha os campos");
    const response = await login(username, password);
    if (response) setError(response)
  }

  return (
    <div className={styles.containerMain}>

      <h2 className="title">Login</h2>
      <form
        action={handleLogin}
        className={styles.containerForm}
      >
        <div className={styles.inputContainer}>
          <label htmlFor="">Usuário</label>
          <input
            type="text"
            name="username"
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="">Senha</label>
          <input
            name="password"
            type="password"
          />
        </div>
        {
          error ? <p className={styles.error}>{error}</p> : null
        }
        <Button />
        <Link href="/login/create">Perdeu a senha?</Link>
      </form>

      <div className={styles.containerRegister}>
        <h3>Cadastre-se</h3>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link href='/login/create'>
          <button>Cadastro</button>
        </Link>
      </div>

    </div>
  )
}
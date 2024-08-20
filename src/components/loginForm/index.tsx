'use client'
import Link from "next/link"
import styles from "./index.module.css"
import { useState } from "react"
import { login } from "@/server-actions/login";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(){
    if(!username || !password) alert("Preencha os campos");
    const response = await login(username,password);
    if(response) setError(response)
  }

  return (
    <div className={styles.containerMain}>
      <h2 className="title">Login</h2>

      <div className={styles.containerForm}>


        <div className={styles.inputContainer}>
          <label htmlFor="">Usuário</label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="">Senha</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        {
          error ? <p className={styles.error}>{error}</p> : null 
        }

        <button
          className={styles.button}
          onClick={handleLogin}
        >
          Entrar
        </button>

        <Link href="/login/create">Perdeu a senha?</Link>
      </div>

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
'use client'
import Link from "next/link"
import styles from "./index.module.css"
import { useEffect, useState } from "react"
import { login, lostPassword } from "@/server-actions/login";
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
            {status.pending ? "Carregando" : "Enviar"}
        </button>
    )
}

export default function LostPasswordForm() {

    const [error, setError] = useState("");
    const [sendEmail, setSendEmail] = useState(false)
    const [url, setUrl] = useState('');

    async function handleLogin(form: FormData) {
        event?.preventDefault()
        const login = String(form.get("login"));
        if (!login) return alert("Preencha o campo");
        const response = await lostPassword(login, url);
        if (!response) return setError("Email / usuário não encontrado")
        setSendEmail(true)
        setError("")
    }

    useEffect(() => {
        setUrl(window.location.href.replace('lost', 'reset'));
    }, []);

    return (
        <div className={styles.containerMain}>

            <h2 className="title">Perdeu a senha?</h2>
            {
                !sendEmail ? <form
                    action={handleLogin}
                    className={styles.containerForm}
                >
                    <div className={styles.inputContainer}>
                        <label htmlFor="">Email / Usuário</label>
                        <input
                            type="text"
                            name="login"
                        />
                    </div>
                    {
                        error ? <p className={styles.error}>{error}</p> : null
                    }
                    <Button />
                </form>

                    : 

                    <p style={{
                        color : "green",
                        fontSize : 20,
                    }}>Email enviado</p>
            }


        </div>
    )
}
'use client'
import Link from "next/link"
import styles from "./index.module.css"
import { useEffect, useState } from "react"
import { login, lostPassword, resetPassword } from "@/server-actions/login";
import { useFormState, useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";


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
            {status.pending ? "Carregando" : "Resetar"}
        </button>
    )
}

export default function ResetPasswordForm() {

    const [error, setError] = useState("");
    const [key, setKey] = useState<string>("")
    const [login, setLogin] = useState<string>("")
    const router = useRouter()

    function getQueryParams(param: string) {
        const params = new URLSearchParams(window.location.search);
        const result = params.get(param);
        return { result };
    }

    async function handleLogin(form: FormData) {
        event?.preventDefault()
        const password = String(form.get("password"));
        if (!password) return alert("Preencha o campo");
        const formData = new FormData()
        formData.append("login", login);
        formData.append("key", key)
        formData.append("password", password)
        const response = await resetPassword(formData);
        if (!response) return alert("Senha não alterada");
        router.push("/login")
    }

    useEffect(() => {
        const login = getQueryParams("login").result;
        const key = getQueryParams("key").result;
        if (login && key) {
            setLogin(login)
            setKey(key);
        }
    }, [])



    return (
        <div className={styles.containerMain}>

            <h2 className="title">Nova senha</h2>
            <form
                action={handleLogin}
                className={styles.containerForm}
            >
                <div className={styles.inputContainer}>
                    <label htmlFor="">Password</label>
                    <input
                        type="password"
                        name="password"
                    />
                </div>
                {
                    error ? <p className={styles.error}>{error}</p> : null
                }
                <Button />
            </form>
        </div>
    )
}
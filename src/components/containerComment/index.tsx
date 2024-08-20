'use client'
import { useFormStatus } from "react-dom";
import styles from "./index.module.css"
import { CommentPhoto } from "@/server-actions/photos";
import { useRef, useState } from "react";



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

export function ContainerComment({ idPhoto }: { idPhoto: Number }) {
    const [comment, setComment] = useState("")
    async function handleComment(form: FormData) {
        if (!comment) return alert("Comente algo!")
        await CommentPhoto(idPhoto, comment);
        setComment("")
    }
    return (
        <form
            action={handleComment}
            className={styles.container}>
            <input
                className={styles.input}
                type="text"
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                />
            <Button />
        </form>
    )
}
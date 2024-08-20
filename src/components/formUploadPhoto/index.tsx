'use client'
import { useState } from "react";
import { getCookies } from "@/server-actions/getCookies";
import styles from "./index.module.css"
import { uploadPhoto } from "@/server-actions/photos";
import { useFormStatus } from "react-dom";

function Button() {
    const status = useFormStatus()
    return (
        <button
            className={styles.button}
            disabled={status.pending}
            style={{
                opacity: status.pending ? .5 : 1
            }}
        >
            {status.pending ? "Carregando" : "Enviar"}
        </button>
    )
}

export function FormUploadPhoto() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        setSelectedFile(file);
    };

    async function handleSubmit(form: FormData) {
        if (!selectedFile) {
            alert('Por favor, selecione um arquivo.');
            return;
        }
        const formData = new FormData();
        formData.append('nome', String(form.get("name")));
        formData.append('peso', String(form.get("weight")));
        formData.append('idade',String(form.get("age")));
        formData.append('img', selectedFile);
        const token = await getCookies();
        formData.append('token', token!!);
        const response = await uploadPhoto(formData);
        if (response && response.error) return alert(response.error)
    };
    return (
        <form
            action={handleSubmit}
            className={styles.containerForm}>
            <div className={styles.inputContainer}>
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" id="name" required />
            </div>

            <div className={styles.inputContainer}>
                <label htmlFor="weight">Peso</label>
                <input min={1} type="number" name="weight" id="weight" required />
            </div>

            <div className={styles.inputContainer}>
                <label htmlFor="age">Idade</label>
                <input min={1} type="number" name="age" id="age" required />
            </div>

            <input
                className={styles.inputFile}
                type="file"
                name="img"
                id="file"
                onChange={handleFileChange}
                required
            />
            <Button />
        </form>
    )
}
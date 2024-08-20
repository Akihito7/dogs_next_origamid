'use server'

import { redirect } from "next/navigation";
import { revalidatePhotosFeedAction } from "./getPhotos";

export async function uploadPhoto(form: FormData) {
    const response = await fetch('https://dogsapi.origamid.dev/json/api/photo', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${form.get("token")}`,
        },
        body: form,
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.error('Erro:', errorData);
        return {
            error: "Algo deu errado ao tentar deletar a foto"
        }
    }
    else {
        const data = await response.json();
        await revalidatePhotosFeedAction();
        redirect("/account")
    }
    
    return {
        error: ""
    }
}       
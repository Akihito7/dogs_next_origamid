'use server'

import { redirect } from "next/navigation";
import { revalidatePhotosFeedAction } from "./getPhotos";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

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

const NAMETOKEN = "@dog:token"
export async function CommentPhoto(idPhoto: Number, comment: string) {
    const token = cookies().get(NAMETOKEN)?.value;

    if (!token) return;

    const response = await fetch(`https://dogsapi.origamid.dev/json/api/comment/${idPhoto}`, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
            'Authorization': `Bearer ${token}`
        },

        body: JSON.stringify({ comment })
    })

    
    revalidateTag("selectedPhoto")

}

export async function fetchComments(idPhoto: Number) {
    const response = await fetch(`https://dogsapi.origamid.dev/json/api/comment/${idPhoto}`, {
        method: 'GET',
        headers: {
            'Content-Type': "application/json"
        },
        next: {
            tags: ['selectedPhoto']
        }
    });
    const data = await response.json()
    return data;
}

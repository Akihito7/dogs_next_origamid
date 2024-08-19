'use client'

import { getCookies } from "@/server-actions/getCookies";
import styles from "./index.module.css"
import { revalidatePhotosFeedAction } from "@/server-actions/getPhotos";
import { useRouter } from "next/navigation";

export default function ButtonDelete({ photoId }: { photoId: string }) {

  const router = useRouter()
  async function handleDeletePhoto() {
    const token = await getCookies()

    const response = await fetch(`https://dogsapi.origamid.dev/json/api/photo/${photoId}`, {
      method : "DELETE",
      headers: {
        'Authorization': `Bearer ${token}`
      },
    });

    if(!response.ok) return alert("Foto não deletada");
    await revalidatePhotosFeedAction();
    router.push("/account")
    
  }

  return (
    <button
      className={styles.buttonDelete}
      onClick={handleDeletePhoto}
    >
      Deletar
    </button>
  )
}
import { Photo } from "@/components/feed";
import Image from "next/image";
import styles from "./index.module.css"
import { getCookies } from "@/server-actions/getCookies";
import { GetUser } from "@/server-actions/getUser";
import ButtonDelete from "@/components/buttonDelete";
import { ContainerComment } from "@/components/containerComment";

type PhotoIdProps = {
  params: {
    id: Number
  }
}
type DataType = {
  photo: Photo
}

export default async function PhotoId({ params }: PhotoIdProps) {
  const response = await fetch(`https://dogsapi.origamid.dev/json/api/photo/${params.id}`);
  const user = await GetUser()
  const { photo }: DataType = await response.json();

  if(!photo) return <h1>Foto não encontrada</h1>

  return (
    <main className={styles.main}>

      <div>
  
        <Image
          className={styles.img}
          width={1200}
          height={800}
          sizes="80vw"
          src={photo.src}
          alt={photo.title}
        />

        <div className={styles.photoMetaData}>
          {
            user?.nicename === photo.author
              ?
              <ButtonDelete
                photoId={String(params.id)}
              />
              :
              <p>@{photo.author}</p>
          }
          <p>{photo.acessos}</p>
        </div>

        <div className={styles.photoDetails}>
          <h2 className="title">{photo.title}</h2>
          <p>| {photo.peso} kg   | {photo.idade} anos</p>


          <div className={styles.containerComments}>
            <p><span>Cat:</span> Joel?</p>
            <p><span>Cat:</span> Joel?</p>
          </div>
        </div>

        <ContainerComment />
      </div>
    </main>

  );
}

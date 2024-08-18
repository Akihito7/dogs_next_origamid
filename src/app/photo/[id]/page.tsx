import { Photo } from "@/components/feed";
import Image from "next/image";
import styles from "./index.module.css"

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
  const { photo }: DataType = await response.json();

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
        <p>@{photo.author}</p>
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
      </div>
    </main>

  );
}

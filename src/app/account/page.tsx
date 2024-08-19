import Link from "next/link";
import styles from "./index.module.css"
import { getPhotosFeed, getPhotosUser } from "@/server-actions/getPhotos";
import { FeedUser } from "@/components/feedUser";

export default async function Account() {

  const data = await getPhotosUser();

  return (
    <div className={styles.containerMain}>
      {
        data.length > 0 &&
        <FeedUser />
      }

      {
        data.length === 0 &&
        <>
          <p className={styles.p}>Nenhuma foto encontrada</p>

          <Link href={"/account/post"} >
            <button
              className={styles.button}
            >
              Postar foto
            </button>
          </Link>
        </>
      }


    </div>
  );
}

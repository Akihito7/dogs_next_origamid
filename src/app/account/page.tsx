import Link from "next/link";
import styles from "./index.module.css"

export default function Account() {
  return (
    <div className={styles.containerMain}>
      <p className={styles.p}>Nenhuma foto encontrada</p>

      <Link href={"/account/post"} >
        <button
          className={styles.button}
        >
          Postar foto
        </button>
      </Link>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css"
import { GetUser } from "@/server-actions/getUser";

export default async function Header() {
  const user =  await GetUser();
  
  return (
    <div className={styles.container}>
      <Image
        width={28}
        height={22}
        quality={75}
        src="../../../dogs.svg"
        alt="imagem de um focinho de cachorro"
      />

      <div className={styles.containerActions}>
          <Link
            href="/login"
            className={styles.link}
          >
          {user ? user.nicename : "Login / Criar"}
          </Link>
          <Image
              width={24}
              height={18}
              quality={75}
              src="../../../usuario.svg"
              alt="imagem de um focinho de cachorro"
            />
      </div>
    </div>
  )
}
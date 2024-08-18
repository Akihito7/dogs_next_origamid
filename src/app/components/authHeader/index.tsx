import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css"

export default function AuthHeader() {
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
            href="/auth/login"
            className={styles.link}
          >
            Login / Criar
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
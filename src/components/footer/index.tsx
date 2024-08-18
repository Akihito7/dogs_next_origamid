import Image from "next/image"
import styles from "./index.module.css"

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Image
        width={28}
        height={22}
        quality={75}
        src="../../../dogs.svg"
        alt="imagem de um focinho de cachorro"
      />
      <p>Dogs. Alguns direitos reservados.</p>
    </div>
  )
}
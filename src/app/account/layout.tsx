import HeaderAccount from "@/components/HeaderAccount"
import styles from "./layout.module.css"
import { useRouter } from "next/router"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.main}>
      <HeaderAccount />
      {children}
    </main>
  )
}
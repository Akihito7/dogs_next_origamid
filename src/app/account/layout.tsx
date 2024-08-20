import HeaderAccount from "@/components/HeaderAccount"
import styles from "./layout.module.css"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.main}>
      <HeaderAccount />
      {children}
    </main>
  )
}
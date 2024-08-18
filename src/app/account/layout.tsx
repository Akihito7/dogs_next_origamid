import styles from "./layout.module.css"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className={styles.containerMain}>
        <div className={styles.container}>
          <h2 className="title">Minha conta</h2>

          <div className={styles.containerButtons}>
            <button>
              oi
            </button>
            <button>
              oi
            </button>
            <button>
              oi
            </button>
            <button>
              oi
            </button>
          </div>

        </div>
      </div>
      {children}
    </main>
  )
}
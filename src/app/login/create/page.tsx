import CreateForm from "@/components/createForm";
import styles from "./index.module.css";

export default function Create() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.containerImage} />
        <CreateForm />
      </main>
    </div>
  );
}

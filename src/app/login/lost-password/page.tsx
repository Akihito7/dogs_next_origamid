import LostPasswordForm from "@/components/lostPasswordForm";
import styles from "./index.module.css";
import LoginForm from "@/components/loginForm";

export default function LostPassword() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.containerImage} />
        <LostPasswordForm />
      </main>
    </div>
  );
}

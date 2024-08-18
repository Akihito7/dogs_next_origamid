import styles from "./index.module.css";
import LoginForm from "@/components/loginForm";

export default function Login() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.containerImage} />
        <LoginForm />
      </main>
    </div>
  );
}

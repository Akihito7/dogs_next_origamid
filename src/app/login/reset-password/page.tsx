import { useRouter } from "next/router";
import styles from "./index.module.css";
import ResetPasswordForm from "@/components/resetPasswordForm";

export default function LostPassword() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.containerImage} />
        <ResetPasswordForm />
      </main>
    </div>
  );
}


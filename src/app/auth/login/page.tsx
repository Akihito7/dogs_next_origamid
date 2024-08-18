import AuthHeader from "@/app/components/authHeader";
import styles from "./index.module.css";
import LoginForm from "@/app/components/loginForm";
import Footer from "@/app/components/footer";

export default function Login() {
  return (
    <div className={styles.container}>
      <AuthHeader />
      <main className={styles.main}>
        <div className={styles.containerImage} />
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
}

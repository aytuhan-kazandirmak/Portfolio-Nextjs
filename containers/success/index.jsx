import Link from "next/link";
import styles from "./styles.module.css";

const SuccessContainer = () => {
  return (
    <section className={styles.section}>
      <p>Thank for messages</p>
      <Link href="/">Back to Home</Link>
    </section>
  );
};

export default SuccessContainer;

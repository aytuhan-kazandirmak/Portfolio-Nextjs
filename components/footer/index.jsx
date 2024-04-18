import Link from "next/link";
import styles from "./styles.module.css";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerDetails}>
        <p className={styles.footerText}>© Aytuhan Kazandırmak 2023</p>
        <div className={styles.footerIcons}>
          <Link href="https://github.com/aytuhan-kazandirmak" target="_blank">
            <IoLogoGithub className={styles.icons} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/aytuhan-kazandirmak/"
            target="_blank"
          >
            <FaLinkedin className={styles.icons} />
          </Link>
          <Link href="https://twitter.com/Aytuhan10" target="_blank">
            <FaTwitterSquare className={styles.icons} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;

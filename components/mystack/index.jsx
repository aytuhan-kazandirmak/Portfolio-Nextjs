import styles from "./styles.module.css";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoRedux } from "react-icons/bi";
import Link from "next/link";
const MyStackComponent = () => {
  return (
    <div className={styles.myStacks}>
      <div className={styles.myStack}>
        <div className={styles.header}>
          <h2>My Stack</h2>
          <p>I mostly use the these technologies for my products</p>
        </div>
        <div className={styles.myStackIcons}>
          <Link href="https://react.dev" target="_blank">
            <FaReact className={styles.icons} />
          </Link>
          <Link href="https://nextjs.org" target="_blank">
            <TbBrandNextjs className={styles.icons} />
          </Link>
          <Link href="https://tailwindcss.com" target="_blank">
            <SiTailwindcss className={styles.icons} />
          </Link>
          <Link href="https://redux.js.org" target="_blank">
            <BiLogoRedux className={styles.icons} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyStackComponent;

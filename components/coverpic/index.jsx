import Image from "next/image";
import Cover from "../../public/cover.jpg";
7;
import styles from "./styles.module.css";

const CoverPicture = () => {
  return (
    <Image
      src={Cover}
      alt="Aytuhan Kazandırmak's Image"
      className={styles.coverPic}
    />
  );
};

export default CoverPicture;

import styles from "./styles.module.css";
import BiographyComponent from "@/components/biography";
import MyStackComponent from "@/components/mystack";
import ProjectComponent from "@/components/projects";
import ContactComponent from "@/components/contact";
const HomeContainer = () => {
  return (
    <section className={styles.section}>
      <BiographyComponent />
      <MyStackComponent />
      <ProjectComponent />
      <ContactComponent />
    </section>
  );
};

export default HomeContainer;

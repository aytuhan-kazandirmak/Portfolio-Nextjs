import CoverPicture from "../coverpic";
import styles from "./styles.module.css";

const BiographyComponent = () => {
  return (
    <div id="about" className={styles.sections}>
      <div className={styles.section}>
        <div className={styles.sectionText}>
          <h2 className={styles.header}>Hi! I&rsquo;m Aytuhan</h2>
          <br />
          <p>
            I&rsquo;m a software developer based in Sakarya, Turkey. I describe
            myself as a curious and patient student.
          </p>
          <br />
          <p>
            I think the world becomes a better place when knowledge and
            experiences are shared; that&rsquo;s why I&rsquo;m here. I embrace
            this philosophy in my professional services and personal projects.
          </p>
          <br />
          <p className={styles.text}>
            Although I don&rsquo;t have an active full-time job, I freelance and
            am involved in various projects. I don&rsquo;t specialize in React
            Native, but I have a strong experience with React. My projects
            usually focus on developing user-friendly interfaces and providing
            innovative solutions.
          </p>
          <br className={styles.text} />
          <p className={styles.text}>
            Instead of blog posts, I prefer to highlight my experiences and
            achievements in various projects.
          </p>
          <br />
          <p>
            You can check my portfolio to learn more about the technologies I
            used in these projects and how I used them effectively.
          </p>
        </div>
        <CoverPicture />
      </div>
    </div>
  );
};

export default BiographyComponent;

import ContactForm from "../contact-form";
import styles from "./styles.module.css";

const ContactComponent = () => {
  return (
    <div id="contact" className={styles.contacts}>
      <div className={styles.contact}>
        <div>
          <p className={styles.contactHeader}>Let&rsquo;s Talk</p>
          <p>
            Don&rsquo;t be shy, I&rsquo;m always open to new ideas and
            collaborations.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactComponent;

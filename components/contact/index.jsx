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
        <form name="contact" method="post" netlify className={styles.form}>
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="name">Name</label>
          <input name="name" type="text" placeholder="Jack Ellison" />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            placeholder="j.ellison@example.com"
          />
          <label htmlFor="message">Message</label>
          <textarea name="message" type="text" placeholder="Need some help" />
          <button className={styles.submitButton} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactComponent;

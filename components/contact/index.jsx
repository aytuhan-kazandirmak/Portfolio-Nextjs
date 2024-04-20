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
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className={styles.form}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className={styles.contactp}>
            <label htmlFor="name">Name</label>
            <input name="name" type="text" placeholder="Jack Ellison" />
          </p>
          <p className={styles.contactp}>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              placeholder="j.ellison@example.com"
            />
          </p>
          <p className={styles.contactp}>
            <label htmlFor="message">Message</label>
            <textarea name="message" type="text" placeholder="Need some help" />
          </p>
          <p>
            <button className={styles.submitButton} type="submit">
              Send
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactComponent;

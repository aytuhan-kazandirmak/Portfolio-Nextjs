import styles from "./styles.module.css";

const ContactForm = () => {
  return (
    <form
      action="/success"
      name="contact"
      method="POST"
      data-netlify="true"
      className={styles.form}
    >
      <input type="hidden" name="form-name" value="contact" />
      <label htmlFor="name">Name</label>
      <input name="name" type="text" placeholder="Jack Ellison" />
      <label htmlFor="email">Email</label>
      <input name="email" type="email" placeholder="j.ellison@example.com" />
      <label htmlFor="message">Message</label>
      <textarea name="message" type="text" placeholder="Need some help" />
      <button className={styles.submitButton} type="submit">
        Send
      </button>
    </form>
  );
};

export default ContactForm;

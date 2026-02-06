import { useState } from "react";
import requests from "../services/requests";
import styles from "./Contact.module.css";

export default function Contact() {
  const [status, setStatus] = useState(""); // idle, sending, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    try {
      const response = await requests.sendContactMessage(
        data.name,
        data.email,
        data.message
      );
      console.log("Response from backend:", response);
      setStatus("success");
    } catch (error) {
      console.error("Error sending contact message:", error);
      setStatus("error");
    }
  };

  return (
    <section className={styles.contact}>
      <h2 className={styles.contactheading}>Let's Work Together</h2>
      <p className={styles.subheading}>
        Whether you need architecture, automation, or a full engineering
        solution — I'm here to help.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label>Name</label>
          <input type="text" name="name" placeholder="Your name" />
        </div>

        <div className={styles.field}>
          <label>Email</label>
          <input type="email" name="email" placeholder="you@example.com" />
        </div>

        <div className={styles.field}>
          <label>Message</label>
          <textarea name="message" placeholder="Tell me about your project..." />
        </div>

        <button type="submit" className={styles.submitBtn}>
          Send message
        </button>
        {status && <p className={styles.status}>{status}</p>}

      </form>

      <div className={styles.directLinks}>
        <p>Prefer direct contact?</p>
        <a href="mailto:jesushdzusa@gmail.com">jesushdzusa@gmail.com</a>
      </div>
    </section>
  );
}
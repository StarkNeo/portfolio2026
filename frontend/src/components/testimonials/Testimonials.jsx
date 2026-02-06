import styles from "./testimonials.module.css";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "JESUS delivered a scalable architecture that transformed our engineering workflow. The automation he built reduced our deployment time dramatically.",
      author: "Daniel R.",
      role: "CTO, NovaTech",
    },
    {
      quote:
        "His AI‑powered SDLC automation saved us hundreds of engineering hours. The system is clean, modular, and incredibly reliable.",
      author: "María L.",
      role: "Engineering Manager, CloudWorks",
    },
    {
      quote:
        "The authentication system JESUS designed is enterprise‑grade. Secure, smooth, and perfectly documented. A true technical architect.",
      author: "Alex P.",
      role: "Lead Developer, Finexa",
    },
  ];

    return (
    <section className={styles.testimonials}>
      <h2 className={styles.testimonialsHeading}>Trusted by teams building at scale</h2>

      <div className={styles.grid}>
        {testimonials.map((t, i) => (
          <div key={i} className={styles.testimonialsCard}>
            <p className={styles.quote}>"{t.quote}"</p>
            <div className={styles.authorBlock}>
              <span className={styles.author}>{t.author}</span>
              <span className={styles.role}>{t.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
    );
}
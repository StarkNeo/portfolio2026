import { useContext, useState, useEffect } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import styles from "./testimonials.module.css";

export default function Testimonials() {
  const { translations } = useContext(LanguageContext);
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    const items = translations("testimonials.items");
    if (items && Array.isArray(items)) {
      setTestimonials(items);
    }
  }, [testimonials, translations]);

  

    return (
    <section className={styles.testimonials}>
      <h2 className={styles.testimonialsHeading}>{translations("testimonials.heading")}</h2>

      <div className={styles.grid}>
        {testimonials.length > 0 && testimonials? (testimonials.map((t, i) => (
          <div key={i} className={styles.testimonialsCard}>
            <p className={styles.quote}>"{t.quote}"</p>
            <div className={styles.authorBlock}>
              <span className={styles.author}>{t.author}</span>
              <span className={styles.role}>{t.role}</span>
            </div>
          </div>
        ))):(<p className={styles.noTestimonials}>No testimonials available.</p>
        )}
      </div>
    </section>
    );
}
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import styles from "./ReadyToStart.module.css";
import { Link } from "react-router-dom";

const ReadyToStart = () => {
  const { translations } = useContext(LanguageContext);
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaBox}>
        <h2 className={styles.ctaTitle}>
          {translations("readyToStart.heading")}
        </h2>

        <Link to="/contact">
          <button className={styles.ctaBtnInner}>{translations("readToStart.button")}</button>
        </Link>
      </div>
    </section>
  );
}

export default ReadyToStart;
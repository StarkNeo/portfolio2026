import styles from "./ReadyToStart.module.css";
import { Link } from "react-router-dom";

const ReadyToStart = () => {
  return (  
<section className={styles.ctaSection}>
        <div className={styles.ctaBox}>
          <h2 className={styles.ctaTitle}>
            Ready to build something scalable?
          </h2>
          
          <Link to="/contact">
          <button className={styles.ctaBtnInner}>Start a project</button>
          </Link>
        </div>
      </section>
    );  
}

export default ReadyToStart;
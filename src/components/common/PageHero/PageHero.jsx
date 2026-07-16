import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import defaultBg from "../../../assets/images/projects/completed/villa-chennai.jpg";
import styles from "./PageHero.module.css";

function PageHero({ title, tag, description, bgImage }) {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(17, 20, 23, 0.8), rgba(17, 20, 23, 0.85)), url(${bgImage || defaultBg})`,
  };

  return (
    <section className={styles.hero} style={backgroundStyle}>
      <div className={styles.overlay}></div>

      <div className="container">
        <div className={styles.content}>
          {tag && (
            <span className={styles.tag}>
              {tag}
            </span>
          )}

          <h1>{title}</h1>

          {description && <p>{description}</p>}

          <div className={styles.breadcrumb}>
            <Link to="/">Home</Link>
            <FaChevronRight />
            <span>{title}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageHero;

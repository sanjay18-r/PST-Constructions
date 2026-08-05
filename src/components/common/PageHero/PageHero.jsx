import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import defaultBg from "../../../assets/images/projects/completed/premium-apartment.jpg";
import styles from "./PageHero.module.css";

function PageHero({ title, tag, description, bgImage, bgPosition = "center" }) {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(180deg, rgba(9, 13, 22, 0.3) 0%, rgba(9, 13, 22, 0.76) 100%), url(${bgImage || defaultBg})`,
    backgroundPosition: bgPosition,
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

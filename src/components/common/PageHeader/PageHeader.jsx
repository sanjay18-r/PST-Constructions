import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

import styles from "./PageHeader.module.css";

function PageHeader({
  subtitle,
  title,
  description,
  backgroundImage,
}) {
  return (
    <section
      className={styles.pageHeader}
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(17, 20, 23,.75),
            rgba(17, 20, 23,.75)
          ),
          url(${backgroundImage})
        `,
      }}
    >
      <div className="container">

        <div className={styles.content}>

          <span className={styles.subtitle}>
            {subtitle}
          </span>

          <h1>
            {title}
          </h1>

          <p>
            {description}
          </p>

          <div className={styles.breadcrumb}>

            <Link to="/">
              Home
            </Link>

            <FaChevronRight />

            <span>
              {subtitle}
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default PageHeader;
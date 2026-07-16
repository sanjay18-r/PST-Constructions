import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import styles from "./CTA.module.css";

function CTA({
  title,
  description,
  buttonText = "Get Free Estimate",
  buttonLink = "/contact",
}) {
  return (
    <section className={styles.cta}>
      <div className="container">

        <div className={styles.content}>

          <span className={styles.tag}>
            LET'S BUILD TOGETHER
          </span>

          <h2>{title}</h2>

          <p>{description}</p>

          <Link
            to={buttonLink}
            className={styles.button}
          >
            {buttonText}
            <FaArrowRight />
          </Link>

        </div>

      </div>
    </section>
  );
}

export default CTA;
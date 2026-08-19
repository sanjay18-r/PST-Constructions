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

          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-estimate-modal"))}
            className={styles.button}
          >
            {buttonText}
            <FaArrowRight />
          </button>

        </div>

      </div>
    </section>
  );
}

export default CTA;
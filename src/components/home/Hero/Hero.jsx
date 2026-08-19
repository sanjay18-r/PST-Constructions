
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import styles from "./Hero.module.css";

import heroImage from "../../../assets/images/hero/hero-main.jpg";

function Hero() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animate Left side elements
    if (leftRef.current) {
      tl.fromTo(
        leftRef.current.children,
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 }
      );
    }

    // Animate Right side elements
    if (rightRef.current) {
      tl.fromTo(
        rightRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.8"
      );
    }
  }, []);

  return (
    <section id="hero" className={styles.hero}>

      <div className={`container ${styles.heroContainer}`}>

        {/* LEFT CONTENT */}

        <div className={styles.left} ref={leftRef}>

          <span className="stencil-badge">
            DESIGN. BUILD. DELIVER.
          </span>

          <h1 style={{ marginTop: "15px" }}>
            Engineering
            <br />
            Tomorrow.
          </h1>

          <h2>
            HEAVY INDUSTRIAL STRENGTH.
            <br />
            STRUCTURAL PERFECTION.
          </h2>

          <p>
            PST Builders is a leading heavy construction and turnkey project 
            management firm delivering luxury villas, modern apartments, and 
            premium commercial hubs with structural perfection.
          </p>

          {/* Buttons */}

          <div className={styles.buttons}>

            <Link to="/projects" className={styles.primaryBtn}>
              View Projects
            </Link>

            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-estimate-modal"))}
              className={styles.secondaryBtn}
            >
              Get Free Estimate
            </button>

          </div>

          {/* Statistics */}

          <div className={styles.stats}>

            <div className={styles.statCard}>
              <h3>15+</h3>
              <span>Completed Projects</span>
            </div>

            <div className={styles.statCard}>
              <h3>20</h3>
              <span>Ongoing Projects</span>
            </div>

            <div className={styles.statCard}>
              <h3>85+</h3>
              <span>Happy Clients</span>
            </div>

            <div className={styles.statCard}>
              <h3>23+</h3>
              <span>Years Experience</span>
            </div>

          </div>

        </div>

        {/* RIGHT CONTENT */}

        <div className={styles.right} ref={rightRef}>

          <img
            src={heroImage}
            alt="PST Builders Hero"
            className={styles.heroImage}
          />

          {/* Floating Card */}

          <div className={styles.floatingCard}>

            <h4>Premium Quality</h4>

            <p>
              Trusted Construction
              <br />
              Since 2002
            </p>

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}

      <div className={styles.scrollIndicator}>

        <span>Scroll to Explore</span>

        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>

      </div>

    </section>
  );
}

export default Hero;
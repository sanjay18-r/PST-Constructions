import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./About.module.css";

import aboutMain from "../../../assets/images/about/about-main.jpg";
import aboutGrid1 from "../../../assets/images/about/about-grid-1.jpg";
import aboutGrid2 from "../../../assets/images/about/about-grid-2.jpg";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;

    // Left content reveal
    if (leftRef.current) {
      gsap.fromTo(
        leftRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: leftRef.current,
            start: "top 80%",
          },
        }
      );
    }

    // Right images reveal
    if (rightRef.current) {
      gsap.fromTo(
        rightRef.current,
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top 75%",
          },
        }
      );
    }
  }, []);

  return (
    <section id="about" className={styles.about} ref={containerRef}>
      <div className={`container ${styles.aboutContainer}`}>

        {/* Left Content */}

        <div className={styles.left} ref={leftRef}>

          <span className="stencil-badge" style={{ marginBottom: "25px" }}>
            ABOUT PST BUILDERS
          </span>

          <div className={styles.line}></div>

          <h2 className="jackhammer-text">
            Crafting Spaces.
            <br />
            Building Trust.
          </h2>

          <p>
            PST Builders & Constructions has been delivering premium
            residential, commercial, and turnkey construction solutions
            for more than two decades. We are committed to quality,
            innovation, transparency, and timely project delivery,
            ensuring every project exceeds our clients' expectations.
          </p>

          <div className={styles.features}>

            <div className={styles.feature}>
              <span>▶</span> Premium Quality Construction
            </div>

            <div className={styles.feature}>
              <span>▶</span> Experienced Engineering Team
            </div>

            <div className={styles.feature}>
              <span>▶</span> On-Time Project Delivery
            </div>

            <div className={styles.feature}>
              <span>▶</span> Transparent Project Management
            </div>

          </div>

          <Link to="/projects" className={styles.button}>
            Explore Our Projects
          </Link>

        </div>

       {/* Right Content */}
       <div className={styles.right} ref={rightRef}>
        <div className={styles.mainImage}>
            <img
            src={aboutMain}
            alt="PST Builders & Constructions"
            />
        </div>
        <div className={styles.bottomImages}>
            <div className={styles.smallImage}>
                <img
                src={aboutGrid1}
                alt="Construction Planning"
                />
            </div>
            <div className={styles.smallImage}>
                <img
                src={aboutGrid2}
                alt="Completed Construction"
                />
            </div>
        </div>
    </div>


</div>
    </section>
  );
}

export default About;
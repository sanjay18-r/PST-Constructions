import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./CallToAction.module.css";

gsap.registerPlugin(ScrollTrigger);

function CallToAction() {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <section className={styles.cta}>
      <div className="container">

        <div className={styles.content} ref={contentRef}>

          <span className="stencil-badge" style={{ marginBottom: "25px" }}>
            START YOUR PROJECT TODAY
          </span>

          <h2>
            Ready to Build Your
            <br />
            Dream Project?
          </h2>

          <p>
            Whether you are planning a luxury estate, a commercial
            complex, a residential township, or a custom turnkey layout,
            our structural engineering team is ready to bring your vision
            to life with unmatched quality and precision.
          </p>

          <div className={styles.buttons}>

            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-estimate-modal"))}
              className={styles.primaryBtn}
            >
              Get Free Estimate
              <FaArrowRight />
            </button>

            <Link
              to="/projects"
              className={styles.secondaryBtn}
            >
              View Projects
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CallToAction;
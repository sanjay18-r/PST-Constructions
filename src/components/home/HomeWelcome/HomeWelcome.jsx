import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaHardHat, FaCogs, FaWrench, FaHammer } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import welcomeImage from "../../../assets/images/projects/completed/villa-chennai.jpg";

import styles from "./HomeWelcome.module.css";

gsap.registerPlugin(ScrollTrigger);

function HomeWelcome() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;

    // Image reveal
    gsap.fromTo(
      imageRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );

    // Content items reveal
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
          },
        }
      );
    }
  }, []);

  return (
    <section className={styles.welcome} ref={containerRef}>
      <div className="container">

        <div className={styles.wrapper}>

          {/* Left Image */}

          <div className={styles.imageSection} ref={imageRef}>

            <img
              src={welcomeImage}
              alt="PST Builders"
            />

          </div>

          {/* Right Content */}

          <div className={styles.content} ref={contentRef}>

            <span className="stencil-badge" style={{ marginBottom: "25px" }}>
              WELCOME TO PST BUILDERS
            </span>

            <h2>
              Building Excellence
              <br />
              Since Day One
            </h2>

            <p>
              With over <strong>23 years of experience</strong>,
              PST Builders & Constructions has successfully
              delivered premium residential, commercial,
              and turnkey construction projects across Chennai
              with exceptional quality and customer satisfaction.
            </p>

            <div className={styles.features}>

              <div>
                <FaHardHat />
                <span>Residential Construction</span>
              </div>

              <div>
                <FaHammer />
                <span>Commercial Buildings</span>
              </div>

              <div>
                <FaWrench />
                <span>Turnkey Projects</span>
              </div>

              <div>
                <FaCogs />
                <span>Premium Interior Works</span>
              </div>

            </div>

            <div className={styles.stats}>

              <div>
                <h3>23+</h3>
                <span>Years Active</span>
              </div>

              <div>
                <h3>22+</h3>
                <span>Heavy Projects</span>
              </div>

              <div>
                <h3>100%</h3>
                <span>Safety Rating</span>
              </div>

            </div>

            <Link
              to="/about"
              className={styles.button}
            >
              Learn More
              <FaArrowRight />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}

export default HomeWelcome;
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./WhyChooseUs.module.css";
import whyChooseUs from "../../../data/whyChooseUs";

gsap.registerPlugin(ScrollTrigger);

function WhyChooseUs() {
  const headingRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    // Heading reveal
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );
    }

    // Cards stagger reveal
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%",
          },
        }
      );
    }
  }, []);

  return (
    <section id="why-choose-us" className={styles.section}>
      <div className="container">

        <div className={styles.heading} ref={headingRef}>

          <span className="stencil-badge" style={{ marginBottom: "25px" }}>
            WHY CHOOSE US
          </span>

          <div className={styles.line}></div>

          <h2>
            Building More Than Structures,
            <br />
            Building Relationships.
          </h2>

          <p>
            We combine engineering excellence, premium materials,
            transparent communication, and decades of experience to
            deliver construction projects you can trust.
          </p>

        </div>

        <div className={styles.cards} ref={cardsRef}>

          {whyChooseUs.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}
                className={styles.card}
              >

                <div className={styles.iconBox}>
                  <Icon />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
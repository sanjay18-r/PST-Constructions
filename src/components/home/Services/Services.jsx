import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Services.module.css";
import services from "../../../data/services";

gsap.registerPlugin(ScrollTrigger);

function Services() {
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

    // Service cards stagger reveal
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
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
    <section id="services" className={styles.services}>
      <div className="container">

        {/* Section Heading */}

        <div className={styles.heading} ref={headingRef}>

          <span className="stencil-badge" style={{ marginBottom: "25px" }}>
            OUR SERVICES
          </span>

          <div className={styles.line}></div>

          <h2>
            Complete Construction
            <br />
            Solutions Under One Roof
          </h2>

          <p>
            From planning and design to construction and project handover,
            PST Builders delivers reliable, innovative, and high-quality
            construction solutions tailored to every client's needs.
          </p>

        </div>

        {/* Services Grid */}

        <div className={styles.servicesGrid} ref={cardsRef}>

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <div
                key={service.id}
                className={styles.card}
              >

                {/* Icon */}

                <div className={styles.iconBox}>
                  <Icon />
                </div>

                {/* Title */}

                <h3>
                  {service.title}
                </h3>

                {/* Description */}

                <p className={styles.description}>
                  {service.description}
                </p>

                {/* Features */}

                <ul className={styles.featureList}>

                  {service.features.map((feature, index) => (

                    <li key={index}>
                      <span className={styles.bullet}>▶</span> {feature}
                    </li>

                  ))}

                </ul>

                {/* Button */}

                <Link
                  to="/contact"
                  className={styles.learnMore}
                >
                  Learn More →
                </Link>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}

export default Services;
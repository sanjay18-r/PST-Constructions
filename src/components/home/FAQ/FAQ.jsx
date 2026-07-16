import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import faqs from "../../../data/faq";
import styles from "./FAQ.module.css";

function FAQ() {
  const [active, setActive] = useState(0);

  const toggle = (index) => {
    setActive(active === index ? -1 : index);
  };

  return (
    <section id="faq" className={styles.faq}>
      <div className="container">

        <div className={styles.heading}>

          <span className={styles.tag}>
            FREQUENTLY ASKED QUESTIONS
          </span>

          <div className={styles.line}></div>

          <h2>
            Everything You Need
            <br />
            To Know
          </h2>

          <p>
            Here are answers to some of the most common questions
            about our construction services and project execution.
          </p>

        </div>

        <div className={styles.accordion}>

          {faqs.map((item, index) => (

            <div
              key={index}
              className={`${styles.item} ${
                active === index ? styles.active : ""
              }`}
            >

              <button
                className={styles.question}
                onClick={() => toggle(index)}
              >

                <span>{item.question}</span>

                <FaChevronDown
                  className={`${styles.icon} ${
                    active === index ? styles.rotate : ""
                  }`}
                />

              </button>

              <div
                className={`${styles.answer} ${
                  active === index ? styles.show : ""
                }`}
              >
                <p>{item.answer}</p>
              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;
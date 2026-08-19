import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

import styles from "./Contact.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">

        {/* Heading */}

        <div className={styles.heading}>

          <span className={styles.tag}>
            CONTACT US
          </span>

          <div className={styles.line}></div>

          <h2>
            Let's Build Something
            <br />
            Extraordinary Together
          </h2>

          <p>
            Have a construction project in mind? Reach out to our
            experienced team today for expert consultation and a
            free project discussion.
          </p>

        </div>

        <div className={styles.wrapper}>

          {/* Contact Cards */}

          <div className={styles.left}>

            <div className={styles.card}>

              <FaMapMarkerAlt />

              <div>

                <h3>Office Address</h3>

                <p>
                  Chennai, Tamil Nadu, India
                </p>

              </div>

            </div>

            <div className={styles.card}>

              <FaPhoneAlt />

              <div>

                <h3>Phone</h3>

                <p><a href="tel:+918682880208" style={{ color: "inherit", textDecoration: "none" }}>+91 8682880208</a></p>

              </div>

            </div>

            <div className={styles.card}>

              <FaEnvelope />

              <div>

                <h3>Email</h3>

                <p><a href="mailto:a.palaniconstructions@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>a.palaniconstructions@gmail.com</a></p>

              </div>

            </div>

            <div className={styles.card}>

              <FaClock />

              <div>

                <h3>Working Hours</h3>

                <p>Mon - Sat : 9:00 AM - 6:00 PM</p>

              </div>

            </div>

          </div>

          {/* Google Map */}

          <div className={styles.right}>

            <iframe
              title="PST Builders Location"
              src="https://www.google.com/maps?q=Chennai&output=embed"
              loading="lazy"
              allowFullScreen
            ></iframe>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
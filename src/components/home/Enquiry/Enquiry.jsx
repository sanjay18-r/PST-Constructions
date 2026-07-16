import { FaUser, FaPhoneAlt, FaEnvelope, FaBuilding } from "react-icons/fa";

import styles from "./Enquiry.module.css";

function Enquiry() {
  return (
    <section id="enquiry" className={styles.enquiry}>
      <div className="container">

        <div className={styles.wrapper}>

          {/* Left Side */}

          <div className={styles.left}>

            <span className={styles.tag}>
              GET IN TOUCH
            </span>

            <div className={styles.line}></div>

            <h2>
              Let's Build
              <br />
              Your Dream Project
            </h2>

            <p>
              Whether you're planning your dream home,
              commercial building or looking for premium
              construction solutions, our experts are
              ready to help you.
            </p>

            <div className={styles.info}>

              <div>

                <h3>23+</h3>

                <span>Years Experience</span>

              </div>

              <div>

                <h3>85+</h3>

                <span>Happy Clients</span>

              </div>

              <div>

                <h3>22+</h3>

                <span>Projects</span>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className={styles.formBox}>

            <form>

              <div className={styles.inputGroup}>

                <FaUser />

                <input
                  type="text"
                  placeholder="Full Name"
                />

              </div>

              <div className={styles.inputGroup}>

                <FaPhoneAlt />

                <input
                  type="tel"
                  placeholder="Phone Number"
                />

              </div>

              <div className={styles.inputGroup}>

                <FaEnvelope />

                <input
                  type="email"
                  placeholder="Email Address"
                />

              </div>

              <div className={styles.inputGroup}>

                <FaBuilding />

                <select>

                  <option>
                    Select Service
                  </option>

                  <option>
                    Residential Construction
                  </option>

                  <option>
                    Commercial Construction
                  </option>

                  <option>
                    Turnkey Project
                  </option>

                  <option>
                    Flats
                  </option>

                  <option>
                    Renovation
                  </option>

                </select>

              </div>

              <textarea
                rows="5"
                placeholder="Tell us about your project..."
              ></textarea>

              <button type="submit">
                Request Free Consultation
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Enquiry;
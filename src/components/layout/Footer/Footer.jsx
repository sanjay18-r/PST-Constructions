import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import logo from "../../../assets/logos/logo-white.png";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>

      <div className="container">

        <div className={styles.footerGrid}>

          {/* Company */}

          <div className={styles.footerColumn}>

            <img
              src={logo}
              alt="PST Builders"
              className={styles.logo}
            />

            <p>
              PST Builders & Constructions is committed to
              delivering premium residential and commercial
              projects with exceptional quality, innovation,
              and customer satisfaction.
            </p>

            <div className={styles.socials}>

              <a href="https://wa.me/918682880208" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>

              <a href="tel:+918682880208" aria-label="Phone">
                <FaPhoneAlt />
              </a>

              <a href="mailto:a.palaniconstructions@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div className={styles.footerColumn}>

            <h3>Quick Links</h3>

            <ul>

              <li><Link to="/">Home</Link></li>

              <li><Link to="/about">About</Link></li>

              <li><Link to="/services">Services</Link></li>

              <li><Link to="/projects">Projects</Link></li>

              <li><Link to="/gallery">Gallery</Link></li>

              <li><Link to="/contact">Contact</Link></li>

            </ul>

          </div>

          {/* Services */}

          <div className={styles.footerColumn}>

            <h3>Our Services</h3>

            <ul>

              <li>Residential Construction</li>

              <li>Commercial Construction</li>

              <li>Turnkey Projects</li>

              <li>Interior Works</li>

              <li>Flats</li>

              <li>Renovation</li>

            </ul>

          </div>

          {/* Contact */}

          <div className={styles.footerColumn}>

            <h3>Contact Info</h3>

            <ul className={styles.contactInfo}>

              <li>

                <FaMapMarkerAlt />

                <span>Chennai, Tamil Nadu</span>

              </li>

              <li>

                <FaPhoneAlt />

                <a href="tel:+918682880208" style={{ color: "inherit", textDecoration: "none" }}>+91 8682880208</a>

              </li>

              <li>

                <FaEnvelope />

                <a href="mailto:a.palaniconstructions@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>a.palaniconstructions@gmail.com</a>

              </li>

            </ul>

          </div>

        </div>

        {/* Caution Tape Marquee Divider */}
        <div className="caution-tape-marquee" style={{ margin: "45px 0 30px" }}>
          <div className="caution-tape-content">
            <span className="caution-tape-text">WARNING: HEAVY QUALITY WORK // EST. 2002</span>
            <span className="caution-tape-text">PST BUILDERS // TURNKEY PROJECTS</span>
            <span className="caution-tape-text">SAFETY STANDARDS COMPLIANT</span>
            <span className="caution-tape-text">INDUSTRIAL PERFORMANCE</span>
            <span className="caution-tape-text">WARNING: HEAVY QUALITY WORK // EST. 2002</span>
            <span className="caution-tape-text">PST BUILDERS // TURNKEY PROJECTS</span>
            <span className="caution-tape-text">SAFETY STANDARDS COMPLIANT</span>
            <span className="caution-tape-text">INDUSTRIAL PERFORMANCE</span>
          </div>
        </div>

        {/* Bottom */}

        <div className={styles.footerBottom}>

          <p>
            © {new Date().getFullYear()} PST Builders &
            Constructions. All Rights Reserved.
          </p>

          <div className={styles.bottomLinks}>

            <Link to="/privacy-policy">
              Privacy Policy
            </Link>

            <span>|</span>

            <a href="#">
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
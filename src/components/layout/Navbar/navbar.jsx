import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import styles from "./navbar.module.css";
import logo from "../../../assets/logos/logo-white.png";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      // Open animation
      gsap.to(menuRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });
      // Stagger link items entrance
      gsap.fromTo(
        linksRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, delay: 0.2, ease: "power2.out" }
      );
      // Disable body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      // Close animation
      gsap.to(menuRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
      });
      // Re-enable body scroll
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Projects" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navbar}`}>

        {/* Logo */}
        <NavLink to="/" className={styles.logo} onClick={handleLinkClick}>
          <img src={logo} alt="PST Builders" />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navLinks}>
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? styles.active : ""
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <button
          onClick={() => window.dispatchEvent(new CustomEvent("open-estimate-modal"))}
          className={styles.cta}
        >
          Get Free Estimate
        </button>

        {/* Mobile Hamburger Icon */}
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Navigation Drawer Overlay */}
        <div className={styles.mobileNav} ref={menuRef} style={{ transform: "translateX(100%)", opacity: 0 }}>
          <ul className={styles.mobileLinks}>
            {menuItems.map((item, index) => (
              <li
                key={item.path}
                ref={(el) => (linksRef.current[index] = el)}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? styles.mobileActive : ""
                  }
                  onClick={handleLinkClick}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li ref={(el) => (linksRef.current[menuItems.length] = el)}>
              <button
                className={styles.mobileCta}
                onClick={() => {
                  handleLinkClick();
                  window.dispatchEvent(new CustomEvent("open-estimate-modal"));
                }}
              >
                Get Free Estimate
              </button>
            </li>
          </ul>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
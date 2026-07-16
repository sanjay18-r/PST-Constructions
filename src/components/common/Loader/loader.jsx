import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaExclamationTriangle } from "react-icons/fa";
import styles from "./Loader.module.css";

import logo from "../../../assets/logos/logo-white.png";

const Loader = ({ finishLoading }) => {
  const loaderRef = useRef();
  const logoRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const progressRef = useRef();
  const warningRef = useRef();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline();

    tl.from(loaderRef.current, {
      opacity: 0,
      duration: 0.4,
    })
      .from(
        logoRef.current,
        {
          scale: 0.6,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.1"
      )
      .from(
        warningRef.current,
        {
          opacity: 0,
          y: -10,
          duration: 0.5,
          ease: "back.out(2)",
        },
        "-=0.5"
      )
      .from(
        titleRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.4"
      )
      .from(
        subtitleRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
        },
        "-=0.4"
      )
      .to(progressRef.current, {
        width: "100%",
        duration: 1.3,
        ease: "power2.out",
      })
      .to(loaderRef.current, {
        opacity: 0,
        duration: 0.7,
        delay: 0.2,
        onComplete: () => {
          document.body.style.overflow = "auto";
          finishLoading();
        },
      });

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [finishLoading]);

  return (
    <div className={styles.loader} ref={loaderRef}>
      <div className={styles.grid}></div>
      <div className={styles.glow}></div>

      <div className={styles.content}>
        <div className={styles.warningAlert} ref={warningRef}>
          <FaExclamationTriangle />
          <span>SITE UNDER PREPARATION</span>
        </div>

        <img
          ref={logoRef}
          src={logo}
          alt="PST Builders"
          className={styles.logo}
        />

        <h1 ref={titleRef}>PST BUILDERS</h1>
        <p ref={subtitleRef}>HEAVY CONSTRUCTION EST. 2002</p>

        <div className={styles.progress}>
          <div ref={progressRef} className={styles.bar}></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
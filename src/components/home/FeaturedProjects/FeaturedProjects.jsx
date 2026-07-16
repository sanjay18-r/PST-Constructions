import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import projects from "../../../data/projects";
import ProjectCard from "../../projects/ProjectCard/ProjectCard";

import styles from "./FeaturedProjects.module.css";

gsap.registerPlugin(ScrollTrigger);

function FeaturedProjects() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 4);

  useEffect(() => {
    const el = containerRef.current;

    // Header reveal
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
          },
        }
      );
    }

    // Grid cards stagger reveal
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 75%",
          },
        }
      );
    }
  }, []);

  return (
    <section className={styles.projects} ref={containerRef}>

      <div className="container">

        <div className={styles.heading} ref={headerRef}>

          <span className="stencil-badge" style={{ marginBottom: "25px" }}>
            OUR PROJECTS
          </span>

          <h2>
            Featured Projects
          </h2>

          <p>
            Discover some of our finest residential,
            commercial, and premium construction projects
            delivered with quality, precision, and excellence.
          </p>

        </div>

        <div className={styles.projectGrid} ref={gridRef}>

          {featuredProjects.map((project) => (

            <ProjectCard
              key={project.id}
              project={project}
            />

          ))}

        </div>

        <div className={styles.buttonWrapper}>

          <Link
            to="/projects"
            className="viewAllBtn"
          >
            View All Projects
          </Link>

        </div>

      </div>

    </section>
  );
}

export default FeaturedProjects;
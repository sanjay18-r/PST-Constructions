import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaArrowRight,
} from "react-icons/fa";

import styles from "./ProjectCard.module.css";

function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageBox}>

        <img
          src={project.image}
          alt={project.title}
        />

        <span
          className={`${styles.status} ${
            styles[project.status.toLowerCase()]
          }`}
        >
          {project.status}
        </span>

      </div>

      <div className={styles.content}>

        <span className={styles.category}>
          {project.category}
        </span>

        <h3>{project.title}</h3>

        <div className={styles.meta}>

          <span>
            <FaMapMarkerAlt />
            {project.location}
          </span>

          <span>
            <FaCalendarAlt />
            {project.year}
          </span>

        </div>

        <p>{project.description}</p>

        <Link
          to={`/projects/${project.id}`}
          className={styles.button}
        >
          View Details

          <FaArrowRight />

        </Link>

      </div>
    </div>
  );
}

export default ProjectCard;
import styles from "./Team.module.css";
import team from "../../../data/team";

function Team() {
  return (
    <section id="team" className={styles.team}>
      <div className="container">

        {/* Section Heading */}

        <div className={styles.heading}>

          <span className="stencil-badge" style={{ marginBottom: "25px" }}>
            MEET OUR LEADERSHIP
          </span>

          <div className={styles.line}></div>

          <h2>
            The People Behind
            <br />
            PST Builders
          </h2>

          <p>
            Our experienced leadership team is committed to delivering
            quality construction, innovative solutions, and complete
            customer satisfaction on every project.
          </p>

        </div>

        {/* Team Cards */}

        <div className={styles.teamGrid}>

          {team.map((member) => (
            <div
              key={member.id}
              className={styles.card}
            >

              {/* Image */}

              <div className={styles.imageWrapper}>

                <img
                  src={member.image}
                  alt={member.name}
                  className={styles.image}
                  style={{ objectPosition: member.imagePosition }}
                />

                <div className={styles.experienceBadge}>
                  {member.experience}
                </div>

              </div>

              {/* Content */}

              <div className={styles.content}>

                <h3>{member.name}</h3>

                <span className={styles.designation}>
                  {member.designation}
                </span>

                <p>
                  {member.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Team;
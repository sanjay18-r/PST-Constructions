import { useParams, Link } from "react-router-dom";
import PageHero from "../components/common/PageHero/PageHero";
import projects from "../data/projects";
import { FaMapMarkerAlt, FaCalendarAlt, FaBuilding, FaInfoCircle, FaArrowLeft, FaCheck } from "react-icons/fa";

function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.id.toString() === slug);

  if (!project) {
    return (
      <main>
        <PageHero
          tag="Error"
          title="Project Not Found"
          description="The construction project you are looking for could not be found or has been relocated."
        />
        <section style={{ padding: "80px 0", textAlign: "center" }}>
          <div className="container">
            <Link
              to="/projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 28px",
                borderRadius: "var(--radius-md)",
                backgroundColor: "var(--gold)",
                color: "white",
                fontWeight: "600",
                boxShadow: "0 10px 20px rgba(197, 160, 89, 0.2)",
              }}
            >
              <FaArrowLeft /> Back to Projects
            </Link>
          </div>
        </section>
      </main>
    );
  }

  // Generate premium mock details depending on category
  const detailsList = project.category === "Residential" || project.category === "Apartments"
    ? [
        "Premium quality vitrified tile flooring",
        "R.C.C. framed structure designed for seismic resistance",
        "Solid block masonry walls with plastering",
        "Teak wood frame for main door with polish finish",
        "UPVC windows with safety grills",
        "Modular switches and premium copper wiring",
      ]
    : [
        "High durability industrial concrete foundations",
        "Modern structural steel frame design",
        "Advanced safety systems and fire exits",
        "Premium glass facade with thermal insulating properties",
        "Spacious office layout design with modular provisions",
        "Underground cabling and backup generator provisions",
      ];

  return (
    <main style={{ background: "var(--background)" }}>
      <PageHero
        tag={`Project / ${project.category}`}
        title={project.title}
        description={`Premium ${project.category.toLowerCase()} construction located in ${project.location}.`}
        bgImage={project.image}
      />

      <section style={{ padding: "80px 0" }}>
        <div className="container">
          {/* Back button */}
          <Link
            to="/projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "var(--gold)",
              fontWeight: "600",
              marginBottom: "40px",
              transition: "transform 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "translateX(-5px)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "translateX(0)")}
          >
            <FaArrowLeft /> Back to All Projects
          </Link>

          {/* Project Details Layout Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 450px), 1fr))",
              gap: "50px",
              alignItems: "start",
            }}
          >
            {/* Left Column: Image and Specs */}
            <div>
              <div
                style={{
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
                  marginBottom: "35px",
                  backgroundColor: "white",
                  aspectRatio: "16/10",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Specifications box */}
              <div
                style={{
                  background: "white",
                  borderRadius: "var(--radius-md)",
                  padding: "35px",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.04)",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
                  gap: "25px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <div
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(197, 160, 89, 0.1)",
                      color: "var(--gold)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                      flexShrink: 0,
                    }}
                  >
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.85rem", color: "var(--text-light)", display: "block" }}>Location</span>
                    <strong style={{ color: "var(--primary)", fontSize: "1.05rem" }}>{project.location}</strong>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <div
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(197, 160, 89, 0.1)",
                      color: "var(--gold)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                      flexShrink: 0,
                    }}
                  >
                    <FaBuilding />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.85rem", color: "var(--text-light)", display: "block" }}>Category</span>
                    <strong style={{ color: "var(--primary)", fontSize: "1.05rem" }}>{project.category}</strong>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <div
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(197, 160, 89, 0.1)",
                      color: "var(--gold)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                      flexShrink: 0,
                    }}
                  >
                    <FaCalendarAlt />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.85rem", color: "var(--text-light)", display: "block" }}>Year Completed</span>
                    <strong style={{ color: "var(--primary)", fontSize: "1.05rem" }}>{project.year}</strong>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <div
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(197, 160, 89, 0.1)",
                      color: "var(--gold)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                      flexShrink: 0,
                    }}
                  >
                    <FaInfoCircle />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.85rem", color: "var(--text-light)", display: "block" }}>Status</span>
                    <strong
                      style={{
                        color: project.status.toLowerCase().includes("complete") ? "#16a34a" : "#f59e0b",
                        fontSize: "1.05rem",
                      }}
                    >
                      {project.status}
                    </strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Description & Specifications list */}
            <div style={{ background: "white", borderRadius: "var(--radius-md)", padding: "40px", boxShadow: "0 15px 40px rgba(0,0,0,0.04)" }}>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1.8rem", color: "var(--primary)", marginBottom: "20px" }}>Project Overview</h2>
              <p style={{ color: "var(--text-light)", lineHeight: "1.8", fontSize: "1.05rem", marginBottom: "35px" }}>
                {project.description} At PST Builders, we ensure every brick and beam reflects our structural integrity guidelines. Our senior engineers supervise project execution round the clock to ensure strict quality inspections.
              </p>

              <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1.3rem", color: "var(--primary)", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ width: "4px", height: "18px", backgroundColor: "var(--gold)", display: "inline-block" }}></span> Technical Features & Specs
              </h3>

              <ul style={{ display: "grid", gap: "15px", listStyle: "none", padding: 0, marginBottom: "40px" }}>
                {detailsList.map((item, index) => (
                  <li key={index} style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "var(--text-light)", lineHeight: "1.5" }}>
                    <div
                      style={{
                        marginTop: "3px",
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(22, 163, 74, 0.1)",
                        color: "#16a34a",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.7rem",
                        flexShrink: 0,
                      }}
                    >
                      <FaCheck />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div
                style={{
                  borderTop: "1px solid var(--border)",
                  paddingTop: "30px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "20px",
                }}
              >
                <div>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-light)", display: "block" }}>Interested in this project?</span>
                  <span style={{ fontSize: "1rem", color: "var(--primary)", fontWeight: "600" }}>Get custom estimation</span>
                </div>
                <Link
                  to="/contact"
                  style={{
                    padding: "14px 28px",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--gold)",
                    color: "white",
                    fontWeight: "600",
                    transition: "all 0.3s ease",
                    boxShadow: "0 10px 20px rgba(197, 160, 89, 0.2)",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--gold-hover)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--gold)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Request Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProjectDetails;
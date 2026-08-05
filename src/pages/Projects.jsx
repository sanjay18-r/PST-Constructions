import { useState } from "react";
import PageHero from "../components/common/PageHero/PageHero";
import projects from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard/ProjectCard";
import bgImage from "../assets/images/projects/completed/apartment-building.jpg";

function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Residential", "Commercial", "Apartments"];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(project => project.category.toLowerCase() === filter.toLowerCase());

  return (
    <main>
      <PageHero
        tag="Our Works"
        title="Featured Construction Projects"
        description="Browse through our portfolio of premium residential villas, commercial complexes, and turnkey developments."
        bgImage={bgImage}
        bgPosition="center 35%"
      />

      <section style={{ padding: "80px 0", background: "var(--background)" }}>
        <div className="container">
          {/* Category Filter Bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              flexWrap: "wrap",
              marginBottom: "50px",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: "12px 28px",
                  borderRadius: "var(--radius-md)",
                  fontWeight: "600",
                  fontSize: "15px",
                  border: filter === cat ? "none" : "1px solid var(--border)",
                  backgroundColor: filter === cat ? "var(--gold)" : "white",
                  color: filter === cat ? "white" : "var(--primary)",
                  boxShadow: filter === cat ? "0 10px 20px rgba(197, 160, 89, 0.2)" : "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  if (filter !== cat) {
                    e.currentTarget.style.borderColor = "var(--gold)";
                    e.currentTarget.style.color = "var(--gold)";
                  }
                }}
                onMouseOut={(e) => {
                  if (filter !== cat) {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--primary)";
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 350px), 1fr))",
              gap: "30px",
            }}
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div style={{ textAlign: "center", padding: "60px 0" }}>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem" }}>No projects found under this category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Projects;
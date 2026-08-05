import { useState } from "react";
import PageHero from "../components/common/PageHero/PageHero";
import gallery from "../data/gallery";
import { FaSearchPlus, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import bgImage from "../assets/images/projects/completed/commercial-office.jpg";

function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ["All", "Residential", "Commercial", "Construction", "Interior"];

  const filteredGallery = filter === "All"
    ? gallery
    : gallery.filter(item => item.category.toLowerCase() === filter.toLowerCase());

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredGallery.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredGallery.length) % filteredGallery.length);
  };

  return (
    <main>
      <PageHero
        tag="Gallery"
        title="Project Showcase Gallery"
        description="Take a visual tour of our completed and ongoing construction projects, structural foundations, and interior spaces."
        bgImage={bgImage}
        bgPosition="center 40%"
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
                  borderRadius: "var(--radius-sm)",
                  fontWeight: "800",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "1.2rem",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  border: "3px solid var(--primary)",
                  backgroundColor: filter === cat ? "var(--gold)" : "white",
                  color: "var(--primary)",
                  boxShadow: filter === cat ? "var(--shadow-sm)" : "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseOver={(e) => {
                  if (filter !== cat) {
                    e.currentTarget.style.backgroundColor = "var(--gold-hover)";
                    e.currentTarget.style.transform = "translate(2px, 2px)";
                    e.currentTarget.style.boxShadow = "2px 2px 0px var(--primary)";
                  }
                }}
                onMouseOut={(e) => {
                  if (filter !== cat) {
                    e.currentTarget.style.backgroundColor = "white";
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = "none";
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
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
              gap: "25px",
            }}
          >
            {filteredGallery.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="blueprint-card-hover"
                style={{
                  aspectRatio: "4/3",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  const overlay = e.currentTarget.querySelector(".gallery-overlay");
                  if (overlay) overlay.style.opacity = "1";
                }}
                onMouseOut={(e) => {
                  const overlay = e.currentTarget.querySelector(".gallery-overlay");
                  if (overlay) overlay.style.opacity = "0";
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                {/* Hover Overlay */}
                <div
                  className="gallery-overlay"
                  style={{
                    position: "absolute",
                    inset: "0",
                    background: "linear-gradient(rgba(17, 20, 23, 0.2), rgba(17, 20, 23, 0.8))",
                    opacity: "0",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "25px",
                    transition: "opacity 0.4s ease",
                    zIndex: 4,
                  }}
                >
                  <span
                    style={{
                      color: "var(--gold)",
                      fontSize: "0.95rem",
                      fontWeight: "800",
                      fontFamily: "'Barlow Condensed', sans-serif",
                      textTransform: "uppercase",
                      letterSpacing: "1.5px",
                      marginBottom: "6px",
                    }}
                  >
                    {item.category}
                  </span>
                  <h3
                    style={{
                      color: "white",
                      fontSize: "1.5rem",
                      fontWeight: "800",
                      fontFamily: "'Barlow Condensed', sans-serif",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <div
                    style={{
                      position: "absolute",
                      top: "20px",
                      right: "20px",
                      background: "var(--gold)",
                      border: "2px solid var(--primary)",
                      color: "var(--primary)",
                      width: "40px",
                      height: "40px",
                      borderRadius: "var(--radius-sm)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1rem",
                      boxShadow: "2px 2px 0 var(--primary)",
                    }}
                  >
                    <FaSearchPlus />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredGallery.length === 0 && (
            <div style={{ textAlign: "center", padding: "60px 0" }}>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem" }}>No images found under this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(17, 20, 23, 0.95)",
            backdropFilter: "blur(10px)",
            zIndex: 10000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            style={{
              position: "absolute",
              top: "25px",
              right: "25px",
              background: "none",
              color: "white",
              fontSize: "1.8rem",
              cursor: "pointer",
              transition: "transform 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <FaTimes />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            style={{
              position: "absolute",
              left: "25px",
              background: "rgba(255, 255, 255, 0.1)",
              color: "white",
              fontSize: "1.5rem",
              width: "55px",
              height: "55px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.25)")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)")}
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={nextImage}
            style={{
              position: "absolute",
              right: "25px",
              background: "rgba(255, 255, 255, 0.1)",
              color: "white",
              fontSize: "1.5rem",
              width: "55px",
              height: "55px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.25)")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)")}
          >
            <FaChevronRight />
          </button>

          {/* Image and Title container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90%",
              maxHeight: "85vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={filteredGallery[lightboxIndex].image}
              alt={filteredGallery[lightboxIndex].title}
              style={{
                maxWidth: "100%",
                maxHeight: "75vh",
                borderRadius: "var(--radius-md)",
                objectFit: "contain",
                boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
              }}
            />
            <h3
              style={{
                color: "white",
                marginTop: "20px",
                fontSize: "1.8rem",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: "800",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                textAlign: "center",
              }}
            >
              {filteredGallery[lightboxIndex].title}
            </h3>
            <span
              style={{
                color: "var(--gold)",
                fontSize: "1.05rem",
                marginTop: "5px",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: "800",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
              }}
            >
              {filteredGallery[lightboxIndex].category}
            </span>
          </div>
        </div>
      )}
    </main>
  );
}

export default Gallery;
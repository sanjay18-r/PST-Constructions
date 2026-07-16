import { Routes, Route } from "react-router-dom";
import { useState } from "react";

// Common Components
import Loader from "./components/common/Loader/loader";
import ScrollToTop from "./components/common/ScrollToTop";
import Navbar from "./components/layout/Navbar/navbar";
import Footer from "./components/layout/Footer/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loader finishLoading={() => setLoading(false)} />;
  }

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/projects/:slug"
          element={<ProjectDetails />}
        />

        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
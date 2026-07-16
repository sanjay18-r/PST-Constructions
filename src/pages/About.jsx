import PageHero from "../components/common/PageHero/PageHero";
import AboutSection from "../components/home/About/About";
import Team from "../components/home/Team/Team";
import ConstructionProcess from "../components/home/ConstructionProcess/ConstructionProcess";

function About() {
  return (
    <main>
      <PageHero
        tag="About PST Builders"
        title="Building Trust, Creating Landmarks"
        description="With over 23 years of excellence, PST Builders & Constructions is dedicated to delivering premium residential and commercial structures with uncompromising quality."
      />

      <AboutSection />

      <Team />

      <ConstructionProcess />
    </main>
  );
}

export default About;
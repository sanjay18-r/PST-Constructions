import PageHero from "../components/common/PageHero/PageHero";
import ServicesSection from "../components/home/Services/Services";
import bgImage from "../assets/images/projects/ongoing/villa-scaffolding.jpg";

function Services() {
  return (
    <main>
      <PageHero
        tag="Our Services"
        title="Complete Construction Solutions"
        description="From architectural planning and structural design to turnkey construction and premium interior works, we deliver complete solutions under one roof."
        bgImage={bgImage}
        bgPosition="center 40%"
      />

      <ServicesSection />
    </main>
  );
}

export default Services;
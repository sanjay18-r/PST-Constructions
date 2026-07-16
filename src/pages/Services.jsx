import PageHero from "../components/common/PageHero/PageHero";
import ServicesSection from "../components/home/Services/Services";

function Services() {
  return (
    <main>
      <PageHero
        tag="Our Services"
        title="Complete Construction Solutions"
        description="From architectural planning and structural design to turnkey construction and premium interior works, we deliver complete solutions under one roof."
      />

      <ServicesSection />
    </main>
  );
}

export default Services;
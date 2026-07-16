import Hero from "../components/home/Hero/Hero";
import HomeWelcome from "../components/home/HomeWelcome/HomeWelcome";
import WhyChooseUs from "../components/home/WhyChooseUs/WhyChooseUs";
import ServicesSection from "../components/home/Services/Services";
import FeaturedProjects from "../components/home/FeaturedProjects/FeaturedProjects";
import CallToAction from "../components/home/CallToAction/CallToAction";

function Home() {
  return (
    <main>
      <Hero />

      <HomeWelcome />

      <WhyChooseUs />

      <ServicesSection />

      <FeaturedProjects />

      <CallToAction />
    </main>
  );
}

export default Home;
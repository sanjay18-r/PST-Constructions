import PageHero from "../components/common/PageHero/PageHero";
import Enquiry from "../components/home/Enquiry/Enquiry";
import ContactSection from "../components/home/Contact/Contact";
import FAQ from "../components/home/FAQ/FAQ";

function Contact() {
  return (
    <main>
      <PageHero
        tag="Contact Us"
        title="Let's Build Something Together"
        description="Have a construction project in mind? Reach out to our experienced team today for expert consultation and a free project discussion."
      />

      <Enquiry />

      <FAQ />

      <ContactSection />
    </main>
  );
}

export default Contact;
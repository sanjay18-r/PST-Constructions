import PageHero from "../components/common/PageHero/PageHero";
import bgImage from "../assets/images/projects/completed/premium-apartment.jpg";

function PrivacyPolicy() {
  return (
    <main>
      <PageHero
        tag="Legal"
        title="Privacy Policy"
        description="Learn how PST Builders & Constructions handles and protects your personal information."
        bgImage={bgImage}
        bgPosition="center 35%"
      />

      <section style={{ padding: "80px 0", background: "var(--background)", color: "var(--text-dark)", lineHeight: "1.8" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <h2 style={{ marginBottom: "20px", color: "var(--primary)", fontFamily: "'Poppins', sans-serif" }}>1. Information We Collect</h2>
          <p style={{ marginBottom: "30px", color: "var(--text-light)" }}>
            We collect information you provide directly to us, such as when you submit an enquiry form, request a quote, or email us. This includes your name, phone number, email address, project interest, and any message details you provide.
          </p>

          <h2 style={{ marginBottom: "20px", color: "var(--primary)", fontFamily: "'Poppins', sans-serif" }}>2. How We Use Your Information</h2>
          <p style={{ marginBottom: "30px", color: "var(--text-light)" }}>
            We use your information to respond to your enquiries, provide estimates, schedule consultations, send updates on your construction projects, and improve our services. We do not sell or lease your personal information to third parties.
          </p>

          <h2 style={{ marginBottom: "20px", color: "var(--primary)", fontFamily: "'Poppins', sans-serif" }}>3. Data Security</h2>
          <p style={{ marginBottom: "30px", color: "var(--text-light)" }}>
            We implement appropriate administrative, technical, and physical security measures to protect your personal information against unauthorized access, disclosure, alteration, or destruction.
          </p>

          <h2 style={{ marginBottom: "20px", color: "var(--primary)", fontFamily: "'Poppins', sans-serif" }}>4. Cookies and Web Analytics</h2>
          <p style={{ marginBottom: "30px", color: "var(--text-light)" }}>
            Our website uses cookies and similar tracking technologies to analyze web traffic, optimize site performance, and improve your user experience. You can disable cookies in your browser settings if you prefer.
          </p>

          <h2 style={{ marginBottom: "20px", color: "var(--primary)", fontFamily: "'Poppins', sans-serif" }}>5. Contact Us</h2>
          <p style={{ marginBottom: "30px", color: "var(--text-light)" }}>
            If you have any questions or concerns about this Privacy Policy, please contact us at <strong>a.palaniconstructions@gmail.com</strong>.
          </p>

          <p style={{ fontSize: "0.9rem", color: "var(--text-light)", marginTop: "40px", borderTop: "1px solid var(--border)", paddingTop: "20px" }}>
            Last updated: July 14, 2026
          </p>
        </div>
      </section>
    </main>
  );
}

export default PrivacyPolicy;
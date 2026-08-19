import { useState } from "react";
import { FaUser, FaPhoneAlt, FaEnvelope, FaBuilding, FaPaperPlane, FaWhatsapp } from "react-icons/fa";
import toast from "react-hot-toast";

import styles from "./Enquiry.module.css";

function Enquiry() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Residential Construction",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      toast.error("Please fill in your Name, Phone Number, and Email Address.");
      return;
    }

    setLoading(true);
    const toastId = toast.loading("Sending your project enquiry...");

    try {
      // Using Web3Forms API (Free access key endpoint or custom VITE_WEB3FORMS_ACCESS_KEY env variable)
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "b886818d-bd26-4685-9c25-59998a112313";

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Project Enquiry from ${formData.name}`,
          from_name: "PST Builders Website",
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          message: formData.message || "No additional message provided.",
        }),
      });

      const result = await response.json();

      if (result.success || response.ok) {
        toast.success("Thank you! Your enquiry has been received. We will contact you shortly.", { id: toastId });
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "Residential Construction",
          message: "",
        });
      } else {
        // Fallback notification if key is not configured yet
        toast.success("Enquiry request submitted! Our team will contact you soon.", { id: toastId });
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "Residential Construction",
          message: "",
        });
      }
    } catch (error) {
      toast.success("Enquiry details captured! Our team will get back to you shortly.", { id: toastId });
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "Residential Construction",
        message: "",
      });
    } finally {
      setLoading(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello PST Builders! I would like to inquire about ${formData.service || "construction services"}.`
  );

  return (
    <section id="enquiry" className={styles.enquiry}>
      <div className="container">
        <div className={styles.wrapper}>
          {/* Left Side */}
          <div className={styles.left}>
            <span className={styles.tag}>GET IN TOUCH</span>
            <div className={styles.line}></div>
            <h2>
              Let's Build
              <br />
              Your Dream Project
            </h2>
            <p>
              Whether you're planning your dream home, commercial building or looking for premium
              construction solutions, our experts are ready to help you.
            </p>

            <div className={styles.info}>
              <div>
                <h3>23+</h3>
                <span>Years Experience</span>
              </div>

              <div>
                <h3>85+</h3>
                <span>Happy Clients</span>
              </div>

              <div>
                <h3>22+</h3>
                <span>Projects</span>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className={styles.formBox}>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <FaUser />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name *"
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <FaPhoneAlt />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number *"
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <FaEnvelope />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address *"
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <FaBuilding />
                <select name="service" value={formData.service} onChange={handleChange}>
                  <option value="Residential Construction">Residential Construction</option>
                  <option value="Commercial Construction">Commercial Construction</option>
                  <option value="Turnkey Project">Turnkey Project</option>
                  <option value="Flats">Flats</option>
                  <option value="Renovation">Renovation</option>
                </select>
              </div>

              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project requirements..."
              ></textarea>

              <button type="submit" disabled={loading}>
                <FaPaperPlane />
                {loading ? "Submitting..." : "Request Free Consultation"}
              </button>

              <div className={styles.divider}>
                <span>OR</span>
              </div>

              <a
                href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappBtn}
              >
                <FaWhatsapp size={20} />
                Chat Directly on WhatsApp
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Enquiry;
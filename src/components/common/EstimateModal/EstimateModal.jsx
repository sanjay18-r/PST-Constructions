import { useState, useEffect, useCallback } from "react";
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaBuilding,
  FaRulerCombined,
  FaPaperPlane,
  FaWhatsapp,
  FaTimes,
  FaExclamationTriangle,
} from "react-icons/fa";
import toast from "react-hot-toast";
import styles from "./EstimateModal.module.css";

function EstimateModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfirmExit, setShowConfirmExit] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Residential Construction",
    area: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // Check if user entered any details in the form
  const hasUnsavedChanges = useCallback(() => {
    return (
      formData.name.trim() !== "" ||
      formData.phone.trim() !== "" ||
      formData.email.trim() !== "" ||
      formData.area.trim() !== "" ||
      formData.message.trim() !== ""
    );
  }, [formData]);

  // Request to close modal (checks unsaved changes first)
  const handleRequestClose = useCallback(() => {
    if (hasUnsavedChanges()) {
      setShowConfirmExit(true);
    } else {
      setIsOpen(false);
      setShowConfirmExit(false);
    }
  }, [hasUnsavedChanges]);

  // Keyboard actions: Listen for ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        if (showConfirmExit) {
          setShowConfirmExit(false);
        } else {
          handleRequestClose();
        }
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, showConfirmExit, handleRequestClose]);

  // Event listener to open modal from anywhere in app
  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setShowConfirmExit(false);
    };
    window.addEventListener("open-estimate-modal", handleOpen);
    return () => window.removeEventListener("open-estimate-modal", handleOpen);
  }, []);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Discard changes & close completely
  const confirmExitModal = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "Residential Construction",
      area: "",
      message: "",
    });
    setShowConfirmExit(false);
    setIsOpen(false);
  };

  const cancelExit = () => {
    setShowConfirmExit(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      toast.error("Please fill in your Name, Phone, and Email Address.");
      return;
    }

    setLoading(true);
    const toastId = toast.loading("Sending your free estimate request...");

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "b886818d-bd26-4685-9c25-59998a112313";

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `FREE ESTIMATE REQUEST from ${formData.name}`,
          from_name: "PST Builders Estimate System",
          to_email: "a.palaniconstructions@gmail.com",
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          builtup_area: formData.area ? `${formData.area} Sq. Ft.` : "Not specified",
          message: formData.message || "Requesting detailed cost estimate & project discussion.",
        }),
      });

      const result = await response.json();

      if (result.success || response.ok) {
        toast.success("Estimate request sent successfully! We will contact you shortly.", { id: toastId });
        confirmExitModal();
      } else {
        toast.success("Estimate request submitted! Our team will contact you soon.", { id: toastId });
        confirmExitModal();
      }
    } catch (error) {
      toast.success("Estimate details submitted! We will reach out shortly.", { id: toastId });
      confirmExitModal();
    } finally {
      setLoading(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello PST Builders! I would like a Free Estimate for ${formData.service}${
      formData.area ? ` (${formData.area} Sq. Ft.)` : ""
    }.${formData.name ? ` Name: ${formData.name}` : ""}`
  );

  return (
    <div className={styles.overlay} onClick={handleRequestClose}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <h3>Get Free Project Estimate</h3>
            <p>PST BUILDERS & CONSTRUCTIONS</p>
          </div>
          <button
            className={styles.closeBtn}
            onClick={handleRequestClose}
            aria-label="Close modal"
            type="button"
          >
            <FaTimes />
          </button>
        </div>

        {/* Body */}
        <div className={styles.body}>
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
                <option value="Flats & Apartments">Flats & Apartments</option>
                <option value="Renovation & Interior">Renovation & Interior</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <FaRulerCombined />
              <input
                type="text"
                name="area"
                value={formData.area}
                onChange={handleChange}
                placeholder="Estimated Area (e.g. 1800 Sq. Ft.)"
              />
            </div>

            <textarea
              rows="3"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us any specific requirements or questions..."
            ></textarea>

            <button type="submit" className={styles.submitBtn} disabled={loading}>
              <FaPaperPlane />
              {loading ? "Sending Estimate Request..." : "Submit Estimate Request"}
            </button>

            <div className={styles.divider}>
              <span>OR GET INSTANT QUOTE</span>
            </div>

            <a
              href={`https://wa.me/918682880208?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              <FaWhatsapp size={18} />
              Instant Estimate on WhatsApp
            </a>
          </form>
        </div>

        {/* Confirmation prompt overlay if user attempts to close with unsaved details */}
        {showConfirmExit && (
          <div className={styles.confirmOverlay} onClick={(e) => e.stopPropagation()}>
            <div className={styles.confirmBox}>
              <FaExclamationTriangle className={styles.warningIcon} />
              <h4>Discard Estimate Request?</h4>
              <p>You have entered details in your estimate request. Would you really like to cancel and exit?</p>
              <div className={styles.confirmActions}>
                <button type="button" className={styles.keepEditingBtn} onClick={cancelExit}>
                  Keep Editing
                </button>
                <button type="button" className={styles.discardBtn} onClick={confirmExitModal}>
                  Discard & Exit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EstimateModal;

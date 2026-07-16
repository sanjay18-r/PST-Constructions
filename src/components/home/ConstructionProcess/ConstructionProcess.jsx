import {
  FaClipboardCheck,
  FaDraftingCompass,
  FaHardHat,
  FaSearch,
  FaKey,
} from "react-icons/fa";

import styles from "./ConstructionProcess.module.css";

const process = [
  {
    id: "01",
    icon: <FaClipboardCheck />,
    title: "Planning & Consultation",
    description:
      "We understand your requirements, budget, project scope, and expectations before initiating the construction process.",
  },

  {
    id: "02",
    icon: <FaDraftingCompass />,
    title: "Design & Estimation",
    description:
      "Our experts prepare architectural plans, structural designs, and accurate cost estimates tailored to your needs.",
  },

  {
    id: "03",
    icon: <FaHardHat />,
    title: "Construction Execution",
    description:
      "Our skilled engineering team executes every stage of construction with quality materials and strict supervision.",
  },

  {
    id: "04",
    icon: <FaSearch />,
    title: "Quality Inspection",
    description:
      "Every project undergoes detailed quality inspections to ensure safety, durability, and premium workmanship.",
  },

  {
    id: "05",
    icon: <FaKey />,
    title: "Project Handover",
    description:
      "After final verification, we deliver the completed project on time with complete customer satisfaction.",
  },
];

function ConstructionProcess() {
  return (
    <section
      id="process"
      className={styles.process}
    >
      <div className="container">

        {/* Heading */}

        <div className={styles.heading}>

          <span className={styles.tag}>
            OUR WORK PROCESS
          </span>

          <div className={styles.line}></div>

          <h2>
            How We Build
            <br />
            Your Dream Project
          </h2>

          <p>
            From the initial consultation to the final handover,
            every stage is carefully planned and executed to
            ensure exceptional quality and complete customer
            satisfaction.
          </p>

        </div>

        {/* Timeline */}

        <div className={styles.timeline}>

          {process.map((step) => (

            <div
              key={step.id}
              className={styles.card}
            >

              <div className={styles.number}>
                {step.id}
              </div>

              <div className={styles.icon}>
                {step.icon}
              </div>

              <h3>
                {step.title}
              </h3>

              <p>
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default ConstructionProcess;
import {
  FaHome,
  FaBuilding,
  FaKey,
  FaPaintRoller,
  FaTools,
  FaDraftingCompass,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: FaHome,
    title: "Residential Construction",
    description:
      "We build premium villas, independent houses, apartments, and custom homes with exceptional quality and craftsmanship.",
    features: [
      "Luxury Villas",
      "Independent Houses",
      "Apartments",
      "Custom Homes",
    ],
  },

  {
    id: 2,
    icon: FaBuilding,
    title: "Commercial Construction",
    description:
      "From office buildings to commercial complexes, we deliver durable and modern spaces tailored to business needs.",
    features: [
      "Office Buildings",
      "Commercial Complexes",
      "Retail Spaces",
      "Warehouses",
    ],
  },

  {
    id: 3,
    icon: FaKey,
    title: "Turnkey Projects",
    description:
      "Complete end-to-end construction solutions from planning and design to execution and final handover.",
    features: [
      "Planning",
      "Design",
      "Construction",
      "Project Handover",
    ],
  },

  {
    id: 4,
    icon: FaPaintRoller,
    title: "Interior & Finishing",
    description:
      "Premium interior solutions that combine elegance, functionality, and modern design for every space.",
    features: [
      "False Ceiling",
      "Modular Kitchen",
      "Flooring",
      "Painting",
    ],
  },

  {
    id: 5,
    icon: FaTools,
    title: "Renovation & Remodeling",
    description:
      "Upgrade existing residential and commercial spaces with structural improvements and modern renovations.",
    features: [
      "Home Renovation",
      "Office Remodeling",
      "Structural Repairs",
      "Modern Upgrades",
    ],
  },

  {
    id: 6,
    icon: FaDraftingCompass,
    title: "Architectural Planning",
    description:
      "Professional planning and design services including layouts, elevations, approvals, and 3D visualization.",
    features: [
      "2D Floor Plans",
      "3D Elevation",
      "Building Approval",
      "Project Planning",
    ],
  },
];

export default services;
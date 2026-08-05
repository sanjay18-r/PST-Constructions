import completed1 from "../assets/images/projects/completed/villa-chennai.jpg";
import completed2 from "../assets/images/projects/completed/premium-apartment.jpg";
import completed3 from "../assets/images/projects/completed/commercial-office.jpg";
import completed4 from "../assets/images/projects/completed/luxury-villa.jpg";
import completed5 from "../assets/images/projects/completed/duplex-house.jpg";
import completed6 from "../assets/images/projects/completed/apartment-building.jpg";
import completed7 from "../assets/images/projects/completed/commercial-complex.jpg";
import completed8 from "../assets/images/projects/completed/independent-house.jpg";

import ongoing1 from "../assets/images/projects/ongoing/luxury-villa-construction.jpg";
import ongoing2 from "../assets/images/projects/ongoing/apartment-under-construction.jpg";
import ongoing3 from "../assets/images/projects/ongoing/commercial-office-construction.jpg";
import ongoing4 from "../assets/images/projects/ongoing/modern-house-progress.jpg";
import ongoing5 from "../assets/images/projects/ongoing/highrise-apartment.jpg";
import ongoing6 from "../assets/images/projects/ongoing/commercial-complex-progress.jpg";
import ongoing7 from "../assets/images/projects/ongoing/villa-scaffolding.jpg";

import upcoming1 from "../assets/images/projects/upcoming/luxury-villa-concept.jpg";
import upcoming2 from "../assets/images/projects/upcoming/future-apartment.jpg";
import upcoming3 from "../assets/images/projects/upcoming/office-tower-render.jpg";
import upcoming4 from "../assets/images/projects/upcoming/gated-community-masterplan.jpg";
import upcoming5 from "../assets/images/projects/upcoming/residential-township.jpg";
import upcoming6 from "../assets/images/projects/upcoming/duplex-villa-render.jpg";
import upcoming7 from "../assets/images/projects/upcoming/mixed-use-development.jpg";

const projects = [

  // =====================
  // COMPLETED PROJECTS
  // =====================

  {
    id: 1,
    title: "Luxury Villa",
    location: "Chennai",
    category: "Residential",
    year: "2025",
    status: "Completed",
    color: "completed",
    image: completed1,
    featured: true,
    description:
      "Premium luxury villa completed with contemporary architecture and high-quality finishes.",
  },

  {
    id: 2,
    title: "Green Valley Apartments",
    location: "Chennai",
    category: "Apartments",
    year: "2024",
    status: "Completed",
    color: "completed",
    image: completed2,
    featured: true,
    description:
      "Modern apartment project designed with premium amenities and elegant living spaces.",
  },

  {
    id: 3,
    title: "Corporate Office",
    location: "Chennai",
    category: "Commercial",
    year: "2024",
    status: "Completed",
    color: "completed3",
    image: completed3,

    featured: false,
    description:
      "Commercial office building featuring modern workspace planning and premium interiors.",
  },

  {
    id: 4,
    title: "Elite Villa",
    location: "Chennai",
    category: "Residential",
    year: "2023",
    status: "Completed",
    color: "completed4",
    image: completed4,
    featured: false,
    description:
      "Elegant independent villa built with modern architecture and luxury specifications.",
  },

  {
    id: 5,
    title: "Duplex Residence",
    location: "Chennai",
    category: "Residential",
    year: "2023",
    status: "Completed",
    color: "completed5",
    image: completed5,
    featured: false,
    description:
      "Premium duplex home designed for spacious family living and contemporary comfort.",
  },

  {
    id: 6,
    title: "Apartment Building",
    location: "Chennai",
    category: "Apartments",
    year: "2022",
    status: "Completed",
    color: "completed6",
    image: completed6,
    featured: false,
    description:
      "Residential apartment complex delivering comfort, convenience, and modern design.",
  },

  {
    id: 7,
    title: "Metro Commercial Plaza",
    location: "Chennai",
    category: "Commercial",
    year: "2022",
    status: "Completed",
    color: "completed7",
    image: completed7,
    featured: false,
    description:
      "Commercial complex offering premium retail and office spaces.",
  },

  {
    id: 8,
    title: "Independent House",
    location: "Chennai",
    category: "Residential",
    year: "2021",
    status: "Completed",
    color: "completed8",
    image: completed8,
    featured: false,
    description:
      "Luxury bungalow completed with elegant interiors and premium landscaping.",
  },

  // =====================
  // ONGOING PROJECTS
  // =====================

  {
    id: 9,
    title: "Skyline Villa",
    location: "Chennai",
    category: "Residential",
    year: "2026",
    status: "Ongoing",
    color: "ongoing",
    image: ongoing1,
    featured: true,
    description:
      "Luxury villa currently under construction with premium structural design.",
  },

  {
    id: 10,
    title: "Green Heights",
    location: "Chennai",
    category: "Apartments",
    year: "2026",
    status: "Ongoing",
    color: "ongoing",
    image: ongoing2,
    featured: false,
    description:
      "Apartment project progressing with modern architecture and quality construction.",
  },

  {
    id: 11,
    title: "Business Tower",
    location: "Chennai",
    category: "Commercial",
    year: "2026",
    status: "Ongoing",
    color: "ongoing",
    image: ongoing3,
    featured: false,
    description:
      "Commercial office tower designed for premium business environments.",
  },

  {
    id: 12,
    title: "Modern Residence",
    location: "Chennai",
    category: "Residential",
    year: "2026",
    status: "Ongoing",
    color: "ongoing",
    image: ongoing4,
    featured: false,
    description:
      "Independent residence built with modern planning and sustainable construction.",
  },

  {
    id: 13,
    title: "Skyline Residency",
    location: "Chennai",
    category: "Apartments",
    year: "2026",
    status: "Ongoing",
    color: "ongoing",
    image: ongoing5,
    featured: false,
    description:
      "Premium apartment development with contemporary living spaces.",
  },

  {
    id: 14,
    title: "Metro Commercial Complex",
    location: "Chennai",
    category: "Commercial",
    year: "2026",
    status: "Ongoing",
    color: "ongoing",
    image: ongoing6,
    featured: false,
    description:
      "Commercial complex under construction featuring retail and office facilities.",
  },

  {
    id: 15,
    title: "Villa Phase II",
    location: "Chennai",
    category: "Residential",
    year: "2026",
    status: "Ongoing",
    color: "ongoing",
    image: ongoing7,
    featured: false,
    description:
      "Luxury villa expansion project currently progressing on schedule.",
  },

  // =====================
  // UPCOMING PROJECTS
  // =====================

  {
    id: 16,
    title: "Luxury Villa Phase III",
    location: "Chennai",
    category: "Residential",
    year: "2027",
    status: "Upcoming",
    color: "upcoming",
    image: upcoming1,
    featured: true,
    description:
      "Upcoming premium villa project with world-class architecture and design.",
  },

  {
    id: 17,
    title: "Future Apartments",
    location: "Chennai",
    category: "Apartments",
    year: "2027",
    status: "Upcoming",
    color: "upcoming",
    image: upcoming2,
    featured: false,
    description:
      "Future residential apartment project designed for modern urban living.",
  },

  {
    id: 18,
    title: "Office Tower",
    location: "Chennai",
    category: "Commercial",
    year: "2027",
    status: "Upcoming",
    color: "upcoming",
    image: upcoming3,
    featured: false,
    description:
      "Upcoming commercial office tower with premium workspace planning.",
  },

  {
    id: 19,
    title: "Green Meadows",
    location: "Chennai",
    category: "Township",
    year: "2027",
    status: "Upcoming",
    color: "upcoming",
    image: upcoming4,
    featured: false,
    description:
      "Large-scale township project planned with integrated community living.",
  },

  {
    id: 20,
    title: "Smart Township",
    location: "Chennai",
    category: "Residential",
    year: "2027",
    status: "Upcoming",
    color: "upcoming",
    image: upcoming5,
    featured: false,
    description:
      "Upcoming residential township focused on smart infrastructure and sustainability.",
  },

  {
    id: 21,
    title: "Duplex Villa Project",
    location: "Chennai",
    category: "Residential",
    year: "2027",
    status: "Upcoming",
    color: "upcoming",
    image: upcoming6,
    featured: false,
    description:
      "Luxury duplex villas designed with spacious layouts and modern aesthetics.",
  },

  {
    id: 22,
    title: "Urban Square",
    location: "Chennai",
    category: "Mixed Use",
    year: "2027",
    status: "Upcoming",
    color: "upcoming",
    image: upcoming7,
    featured: false,
    description:
      "Mixed-use development combining commercial and residential spaces.",
  },

];

export default projects;
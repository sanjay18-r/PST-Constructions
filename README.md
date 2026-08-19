# 🏗️ PST Builders & Constructions

A modern, responsive, and visually dynamic web application built for **PST Builders & Constructions**. This platform showcases construction services, portfolio projects (completed, ongoing, and upcoming), photo galleries, company background, and client enquiry handling.

---

## ✨ Features

- 🏡 **Comprehensive Home Showcase**: Hero banner, company welcome, core services, featured projects, process roadmap, team showcase, testimonials/FAQ, and call-to-action sections.
- 📱 **Fully Responsive Layout**: Crafted with CSS Modules and mobile-first design principles for seamless viewing across smartphones, tablets, and desktops.
- 🏢 **Dynamic Project Portfolio**: Filterable project listings with individual detailed pages for completed, ongoing, and upcoming developments.
- 🖼️ **Interactive Image Gallery**: Categorized showcase of residential, commercial, interior, and ongoing construction work.
- ✉️ **Contact & Enquiry Handling**: Serverless contact forms integrated with Web3Forms email delivery, direct WhatsApp business inquiry triggers, and real-time toast notifications (`react-hot-toast`).
- ⚡ **High Performance & Smooth Animations**: Built on **Vite** and **React 19**, featuring smooth scrolling, counter animations (`react-countup`), carousel sliders (`swiper`), and GSAP effects.
- 🔍 **SEO & Performance**: Open Graph metadata, Twitter Cards, clean semantic HTML5 hierarchy, preloaded Google Web Fonts (`Barlow Condensed`, `Share Tech Mono`), and accessibility-first layouts.

---

## 🛠️ Tech Stack

- **Frontend Core**: React 19, React DOM
- **Build Tool**: Vite 8
- **Routing**: React Router DOM v7
- **Styling**: Vanilla CSS with CSS Modules, CSS Custom Properties (Variables)
- **Animations & UI Utilities**:
  - `gsap` - Advanced web animations
  - `swiper` - Modern touch slider
  - `react-countup` - Animated statistical numbers
  - `react-icons` - Scalable icon sets
  - `react-intersection-observer` - Scroll triggers
  - `react-hook-form` - Form validation
  - `react-hot-toast` - Toast notifications
  - `axios` - HTTP requests

---

## 📁 Project Structure

```text
PST-BUILDERS/
├── public/                # Static assets (favicons, public images)
├── src/
│   ├── assets/            # Project images, logos, and graphic assets
│   ├── components/        # Modular UI components
│   │   ├── common/        # Shared components (Loader, EstimateModal, ScrollToTop, PageHero, etc.)
│   │   ├── home/          # Home page sections (Hero, Services, Team, FAQ, etc.)
│   │   ├── layout/        # Layout elements (Navbar, Footer)
│   │   └── projects/      # Project-specific cards and elements
│   ├── data/              # Static data providers (projects, services, gallery, team, FAQ)
│   ├── pages/             # Main page components (Home, About, Services, Projects, etc.)
│   ├── styles/            # Global CSS styles, utility classes, design variables
│   ├── App.jsx            # Main App component & route declarations
│   └── main.jsx           # Application entry point
├── index.html             # HTML entry template
├── vite.config.js         # Vite configuration file
└── package.json           # Dependencies and project scripts
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18.0.0 or higher) and **npm** installed on your system.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sanjay18-r/PST-Constructions.git
   cd PST-Constructions
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

---

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the Vite local development server with Hot Module Replacement (HMR).
- `npm run build`: Compiles and optimizes the project for production inside the `dist/` directory.
- `npm run preview`: Locally previews the production build.
- `npm run lint`: Runs ESLint to check for syntax and style issues.

---

## 📄 Pages Included

- **Home (`/`)**: Main landing page with interactive banners, service summaries, counters, and client CTAs.
- **About (`/about`)**: Company background, core values, mission, and leadership team.
- **Services (`/services`)**: In-depth breakdown of construction, architectural planning, interior design, and renovation services.
- **Projects (`/projects`)**: Filterable overview of ongoing, completed, and upcoming construction projects.
- **Project Details (`/projects/:slug`)**: Dynamic detailed view of specific construction projects.
- **Gallery (`/gallery`)**: Categorized photo gallery of completed works.
- **Contact (`/contact`)**: Contact details, map location, and direct enquiry form.
- **Privacy Policy (`/privacy-policy`)**: Terms and privacy guidelines.
- **404 Not Found (`*`)**: Custom error page for invalid routes.

---

## 🔒 License

This project is proprietary and created for **PST Builders & Constructions**. All rights reserved.

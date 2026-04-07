// counter.js
// CHANGE: updated with full resume info
// - Added Portfolio Website project (from resume)
// - Added SQL + PostgreSQL to skills used
// - Kept Amazon Clone and CLI Shopping Cart
// - Descriptions polished to match resume bullet points
// - "coming" flag used by main.js to render dashed card

export const projects = [
  {
    number: "01",
    title: "Star Wars Character Explorer",
    description: "A frontend web application to search and explore Star Wars characters via the SWAPI.",
    tech: ["JavaScript", "HTML", "CSS", "Fetch API", "Vite"],
    link: "https://syed-hannah-mls.github.io/mod-4-project/",
    github: "https://github.com/syed-hannah-mls/mod-4-project",
    presentation: "https://docs.google.com/presentation/d/1sbuY7oEAvEeycXVkX39-Yre0vyNzfN05UpbmRnNm37A/edit?usp=sharing",
    detail: [
      "Integrated Fetch API with asynchronous JavaScript to retrieve paginated character data and dynamically render results.",
      "Implemented client-side search filtering and modal-based character detail views using DOM manipulation and event listeners.",
      "Designed responsive layouts and interactive UI components with HTML & CSS to ensure consistent navigation and character browsing across mobile and desktop devices using Vite."
    ],
    date: "Feb 2026"
  },
  {
    number: "02",
    title: "CLI Shopping Cart",
    description: "A Node.js command-line app to browse products, add items, and calculate totals with real-time input handling.",
    tech: ["JavaScript", "Node.js"],
    link: "https://github.com/Syed-Imranullah/Shopping-List-Manager-CLI-project",
    github: "https://github.com/Syed-Imranullah/Shopping-List-Manager-CLI-project",
    presentation: "",
    detail: [
      "Built a fully interactive CLI app to browse products, add items to a cart, and calculate totals.",
      "Handles user input validation and real-time total calculation.",
      "Built using Node.js and plain JavaScript for fast, lightweight CLI interactions."
    ],
    date: "Feb 2026"
  },
  {
    number: "03",
    title: "Amazon Clone",
    description: "A responsive front-end clone of Amazon's website built with HTML and CSS.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Syed-Imranullah/Amazon-Clone-Zayan",
    github: "https://github.com/Syed-Imranullah/Amazon-Clone-Zayan",
    presentation: "",
    detail: [
      "A responsive front-end clone of Amazon's website built with HTML and CSS.",
      "Features product listings, navigation bar, and layout inspired by the original site.",
      "Focused on clean, accessible, user-friendly shopping interface design."
    ],
    date: "Jan 2026"
  },
  {
    number: "04",
    title: "Coming Soon",
    description: "Next project currently in development — stay tuned.",
    tech: [],
    link: "#",
    github: "#",
    presentation: "",
    detail: ["More details coming soon!"],
    date: "TBD",
    coming: true  // CHANGE: flag used in main.js to render dashed variant
  }
];
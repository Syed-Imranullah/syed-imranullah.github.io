// counter.js
// Updated with full resume info — May 2026

export const projects = [
  {
    number: "01",
    title: "AntCapture",
    description:
      "Full-stack Chrome extension for screen recording, screenshots, and automated cloud sync with a web-based media library.",
    tech: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "Prisma", "JWT", "Google OAuth 2.0", "Chrome MV3"],
    link: "https://antcapture.anttake.com/",
    github: "https://github.com/Syed-Imranullah",
    presentation: "",
    detail: [
      "Built a Chrome Manifest V3 extension with React/Vite, implementing tab-based screen recording via MediaRecorder and tabCapture APIs that automatically sync captures to a Node.js/Express backend.",
      "Developed a JWT-authenticated REST API with Google OAuth 2.0 and PostgreSQL via Prisma ORM, powering both the Chrome extension and React web UI from a single backend.",
      "Implemented Chrome Offscreen Document architecture to support persistent recording workflows within MV3 service worker limitations.",
      "Architected a cross-context session system enabling captures recorded in the extension to appear instantly in the user's web library, handling MV3 service worker constraints and offscreen document lifecycle."
    ],
    date: "Mar 2026"
  },
  {
    number: "02",
    title: "GoalIQ",
    description:
      "Full-stack soccer pick'em prediction league where users compete in private leagues by predicting real match outcomes, with automated scoring and live leaderboards.",
    tech: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "node-cron", "footballdata.io API"],
    link: "https://soccer-backend-fc9f.onrender.com",
    github: "https://github.com/Syed-Imranullah",
    presentation: "",
    detail: [
      "Built a REST API with Node.js/Express and PostgreSQL featuring session-based authentication, protected routes via custom middleware, and a five-table relational schema supporting many-to-many league membership and per-league prediction tracking with ownership-enforced CRUD operations.",
      "Integrated the footballdata.io API to sync real Premier League and La Liga fixtures into PostgreSQL using upsert logic, and implemented a node-cron job that automatically pulls match results every 5 minutes and scores user predictions without manual intervention.",
      "Developed a React/Vite frontend with adapter-based data fetching, lifted state for active league context, and prediction locking that blocks submissions after kickoff using real-time match date comparison."
    ],
    date: "May 2026"
  },
  {
    number: "03",
    title: "Star Wars Character Explorer",
    description:
      "A frontend web application to search and explore Star Wars characters via the SWAPI.",
    tech: ["JavaScript", "HTML", "CSS", "Fetch API", "Vite"],
    link: "https://syed-hannah-mls.github.io/mod-4-project/",
    github: "https://github.com/syed-hannah-mls/mod-4-project",
    presentation:
      "https://docs.google.com/presentation/d/1sbuY7oEAvEeycXVkX39-Yre0vyNzfN05UpbmRnNm37A/edit?usp=sharing",
    detail: [
      "Integrated Fetch API with asynchronous JavaScript to retrieve paginated character data and dynamically render results.",
      "Implemented client-side search filtering and modal-based character detail views using DOM manipulation and event listeners.",
      "Designed responsive layouts and interactive UI components with HTML & CSS to ensure consistent navigation and character browsing across mobile and desktop devices using Vite."
    ],
    date: "Feb 2026"
  },
  {
    number: "04",
    title: "CLI Shopping Cart",
    description:
      "A Node.js command-line app to browse products, add items, and calculate totals with real-time input handling.",
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
  }]
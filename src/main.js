// main.js
import { projects } from "./counter.js";
import { animateOnScroll, initParticles, initCursor } from "./animation.js";

// ── DOM refs ──────────────────────────────────────────────────────
const projectGrid = document.getElementById("project-grid");
const backBtn     = document.getElementById("backToTop");
const form        = document.querySelector(".contact-form");
const submitBtn   = form.querySelector(".submit-btn");

// Modal refs
const modal     = document.getElementById("projectModal");
const mTitle    = document.getElementById("modalTitle");
const mDate     = document.getElementById("modalDate");
const mDetails  = document.getElementById("modalDetails");
const mTech     = document.getElementById("modalTech");
const closeBtn  = document.getElementById("closeModal");
const mLive     = document.getElementById("modalLinkLive");
const mRepo     = document.getElementById("modalLink");
const mPres     = document.getElementById("modalPresentation");

// ── CREATE PROJECT CARD ───────────────────────────────────────────
function createProjectCard(project) {
  const card = document.createElement("div");

  // CHANGE: coming-soon cards get a distinct dashed style
  card.className = "project-card" + (project.coming ? " card-coming" : "");

  if (project.coming) {
    // CHANGE: spinning icon + muted text for coming-soon slot
    card.innerHTML = `
      <span class="coming-icon">⟳</span>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;
    return card;
  }

  // CHANGE: numbered label "// 01 — Feb 2026" replaces big circle number
  const badges = project.tech.map((t) => `<li>${t}</li>`).join("");
  card.innerHTML = `
    <div class="project-number">// ${project.number} &mdash; ${project.date}</div>
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <ul class="tech-badge">${badges}</ul>
  `;

  // Open modal on click
  card.addEventListener("click", () => openModal(project));

  return card;
}

// ── OPEN MODAL ───────────────────────────────────────────────────
function openModal(project) {
  mTitle.textContent = project.title;
  mDate.textContent  = project.date;

  mDetails.innerHTML = "";
  project.detail?.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    mDetails.appendChild(li);
  });

  mTech.innerHTML = "";
  const ul = document.createElement("ul");
  project.tech.forEach((t) => {
    const li = document.createElement("li");
    li.textContent = t;
    ul.appendChild(li);
  });
  mTech.appendChild(ul);

  // CHANGE: hide "View Live" when it's the same as GitHub or missing
  const hasLive = project.link && project.link !== "#" && project.link !== project.github;
  mLive.href           = project.link || "#";
  mLive.style.display  = hasLive ? "inline-flex" : "none";

  mRepo.href = project.github || "#";

  // CHANGE: hide presentation button when no link provided
  if (project.presentation) {
    mPres.href         = project.presentation;
    mPres.style.display = "inline-flex";
  } else {
    mPres.style.display = "none";
  }

  modal.style.display = "block";
}

// ── CLOSE MODAL ───────────────────────────────────────────────────
function closeModal() {
  modal.style.display = "none";
}

closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
// CHANGE: ESC key also closes modal
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

// ── RENDER PROJECTS ───────────────────────────────────────────────
projects.forEach((project) => {
  projectGrid.appendChild(createProjectCard(project));
});

// ── BACK TO TOP ───────────────────────────────────────────────────
window.addEventListener("scroll", () => {
  // CHANGE: use flex display to match the centered arrow layout
  backBtn.style.display = window.scrollY > 320 ? "flex" : "none";
});
backBtn.style.alignItems    = "center";
backBtn.style.justifyContent = "center";

backBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ── CONTACT FORM ──────────────────────────────────────────────────
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  submitBtn.textContent = "Sending…";

  try {
    const res = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      const msg = document.createElement("p");
      msg.textContent = "✓ Message sent successfully!";
      msg.style.cssText =
        "color:#0f0;font-family:'Space Mono',monospace;font-size:.8rem;margin-top:10px;";
      form.appendChild(msg);
      form.reset();
      setTimeout(() => msg.remove(), 4000);
    } else {
      alert("Oops! There was a problem sending your message.");
    }
  } catch {
    alert("Oops! There was a problem sending your message.");
  }

  submitBtn.textContent = "Send Message";
});

// ── HAMBURGER MENU ────────────────────────────────────────────────
// CHANGE: mobile hamburger toggle
const ham   = document.getElementById("hamburger");
const links = document.getElementById("nav-links");

ham.addEventListener("click", () => {
  ham.classList.toggle("open");
  links.classList.toggle("open");
});

links.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    ham.classList.remove("open");
    links.classList.remove("open");
  });
});

// ── INIT ANIMATIONS ───────────────────────────────────────────────
// CHANGE: three new inits from animation.js
initParticles();   // floating neon dots canvas
initCursor();      // custom dot + ring cursor
animateOnScroll(); // IntersectionObserver card reveals
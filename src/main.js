// main.js
import { projects } from "./counter.js";
import { animateOnScroll } from "./animation.js";

// DOM elements
const projectGrid = document.getElementById("project-grid");
const backBtn = document.getElementById("backToTop");
const form = document.querySelector(".contact-form");
const submitBtn = form.querySelector(".submit-btn");

// Modal elements
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDate = document.getElementById("modalDate");
const modalDetails = document.getElementById("modalDetails");
const modalTech = document.getElementById("modalTech");
const closeModal = document.getElementById("closeModal");

// buttons already in HTML
const modalLinkLive = document.getElementById("modalLinkLive");
const modalLinkRepo = document.getElementById("modalLink");
const modalLinkPresentation = document.getElementById("modalPresentation");

// CREATE PROJECT CARD
function createProjectCard(project) {
  const card = document.createElement("div");
  card.className = "project-card";

  const numberDiv = document.createElement("div");
  numberDiv.className = "project-number";
  numberDiv.textContent = project.number;
  card.appendChild(numberDiv);

  const title = document.createElement("h3");
  title.textContent = project.title;
  card.appendChild(title);

  const desc = document.createElement("p");
  desc.textContent = project.description;
  card.appendChild(desc);

  if (project.tech.length > 0) {
    const techDiv = document.createElement("div");
    techDiv.className = "tech-badge";
    const ul = document.createElement("ul");

    project.tech.forEach((tech) => {
      const li = document.createElement("li");
      li.textContent = tech;
      ul.appendChild(li);
    });

    techDiv.appendChild(ul);
    card.appendChild(techDiv);
  }

  // MODAL OPEN
  card.addEventListener("click", () => {
    modal.style.display = "block";

    modalTitle.textContent = project.title;
    modalDate.textContent = project.date || "";

    // details
    modalDetails.innerHTML = "";
    project.detail?.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      modalDetails.appendChild(li);
    });

    // tech
    modalTech.innerHTML = "";
    const techUl = document.createElement("ul");
    techUl.className = "tech-badge";

    project.tech.forEach((tech) => {
      const li = document.createElement("li");
      li.textContent = tech;
      techUl.appendChild(li);
    });

    modalTech.appendChild(techUl);

    // BUTTON LINKS
    modalLinkLive.href = project.link || "#";
    modalLinkLive.textContent = "View Live";

    modalLinkRepo.href = project.github || "#";
    modalLinkRepo.textContent = "View on GitHub";

    if (modalLinkPresentation) {
      modalLinkPresentation.href = project.presentation || "#";
      modalLinkPresentation.textContent = "View Presentation";
    }
  });

  return card;
}

// Render projects
projects.forEach((project) => {
  const card = createProjectCard(project);
  projectGrid.appendChild(card);
});

// Modal close
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Back to top
window.addEventListener("scroll", () => {
  backBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

backBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Contact form
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  submitBtn.textContent = "Sending...";

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      const successMsg = document.createElement("p");

      successMsg.textContent =
        "Thanks! Your message was sent successfully.";

      successMsg.style.color = "#0f0";
      successMsg.style.fontWeight = "bold";

      form.appendChild(successMsg);

      form.reset();

      setTimeout(() => successMsg.remove(), 4000);
    } else {
      alert("Oops! There was a problem sending your message.");
    }
  } catch (err) {
    alert("Oops! There was a problem sending your message.");
  }

  submitBtn.textContent = "Send Message";
});

// Animate projects
animateOnScroll();
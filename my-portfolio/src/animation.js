// animations.js
export function animateOnScroll() {
  const cards = document.querySelectorAll(".project-card");

  function reveal() {
    cards.forEach((card) => {
      const windowHeight = window.innerHeight;
      const cardTop = card.getBoundingClientRect().top;
      const revealPoint = 150; // adjust how early cards animate

      if (cardTop < windowHeight - revealPoint) {
        card.classList.add("active");
      } else {
        card.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", reveal);
  reveal(); // run on load
}
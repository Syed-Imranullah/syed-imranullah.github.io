// animation.js
// CHANGE: replaced scroll-event listener with IntersectionObserver
// — more performant, no layout thrashing on every scroll tick

export function animateOnScroll() {
  const cards = document.querySelectorAll(".project-card");

  // CHANGE: IntersectionObserver instead of getBoundingClientRect on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    },
    { threshold: 0.12 }
  );

  cards.forEach((card) => observer.observe(card));
}

// CHANGE: brand new — floating neon particle canvas
export function initParticles() {
  const canvas = document.getElementById("canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const COLORS = [
    "rgba(162,0,255,",
    "rgba(255,0,255,",
    "rgba(0,255,255,",
  ];

  let W, H, particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function makeParticle() {
    return {
      x:  Math.random() * W,
      y:  Math.random() * H,
      r:  Math.random() * 1.4 + 0.3,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: Math.random() * 0.45 + 0.08,
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: 110 }, makeParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color + p.alpha + ")";
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  init();
  draw();
}

// CHANGE: brand new — custom cursor with lag-follow ring
export function initCursor() {
  const dot  = document.getElementById("cur");
  const ring = document.getElementById("cur-ring");
  if (!dot || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + "px";
    dot.style.top  = my + "px";
  });

  // ring lerps toward mouse position
  (function lerp() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + "px";
    ring.style.top  = ry + "px";
    requestAnimationFrame(lerp);
  })();

  // grow ring on interactive elements
  const interactives = "a, button, .project-card, .skill, .tech-chip";
  document.querySelectorAll(interactives).forEach((el) => {
    el.addEventListener("mouseenter", () => document.body.classList.add("cursor-grow"));
    el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-grow"));
  });
}
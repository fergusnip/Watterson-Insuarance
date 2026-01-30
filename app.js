// ==============================
// Mobile Navigation Toggle
// ==============================

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.querySelector(".nav__menu");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("isOpen");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close menu when clicking a link (mobile)
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("isOpen");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      menu.classList.remove("isOpen");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
});

// ==============================
// Optional: Smooth anchor fallback
// (Prevents jumpy behaviour on some browsers)
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEv

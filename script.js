// Typed.js effect
const typed = new Typed(".auto-type", {
  strings: ["Web Developer.", "Mobile App Developer.", "Backend Developer."],
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 1000,
  loop: true,
});

// Fade-in sections on scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

sections.forEach((sec) => observer.observe(sec));

// Optional: Contact form handler (prevent default for now)
document.querySelector(".contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thanks for reaching out! 🚀 I'll get back to you soon.");
});

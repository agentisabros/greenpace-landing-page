const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector("nav ul");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  nav.classList.toggle("open");
  hamburger.classList.toggle("open");
});

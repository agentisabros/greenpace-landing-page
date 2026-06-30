const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const slider = document.querySelector(".product-slider, .products-slider");
const faqArrows = document.querySelectorAll(".faq-arrow");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  nav.classList.toggle("open");
  hamburger.classList.toggle("open");
});
if (slider) {
  let scrollAmount = 0;
  setInterval(() => {
    const cardWidth = slider.querySelector("article, img").offsetWidth + 16;
    scrollAmount += cardWidth;
    if (scrollAmount > slider.scrollWidth - slider.clientWidth) {
      scrollAmount = 0;
    }
    slider.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  }, 4000);
}
faqArrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    const faqItem = arrow.closest(".faq-item");
    faqItem.classList.toggle("active");
  });
});

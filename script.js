const hamburger = document.getElementById("hamburger");
const currentPage = window.location.pathname.split("/").pop() || "index.html";
const navLinks = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const slider = document.querySelector(".product-slider, .products-slider");
const faqArrows = document.querySelectorAll(".faq-arrow");

if (hamburger && navLinks && nav) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    nav.classList.toggle("open");
    hamburger.classList.toggle("open");
  });
}

if (slider) {
  let scrollAmount = 0;
  const firstItem = slider.querySelector("article, img");

  if (firstItem) {
    setInterval(() => {
      const cardWidth = firstItem.offsetWidth + 16;
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
}

faqArrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    const faqItem = arrow.closest(".faq-item");
    if (faqItem) {
      faqItem.classList.toggle("active");
    }
  });
});

const testimonialTrack = document.querySelector(".testimonial-track");
const testimonialCards = document.querySelectorAll(".testimonial-card");
const prevTestimonialBtn = document.querySelector(".testimonial-prev");
const nextTestimonialBtn = document.querySelector(".testimonial-next");

if (testimonialTrack && testimonialCards.length > 1 && prevTestimonialBtn && nextTestimonialBtn) {
  let currentIndex = 0;

  const updateTestimonialSlider = () => {
    testimonialCards.forEach((card, index) => {
      card.classList.toggle("active", index === currentIndex);
      card.style.transform = index === currentIndex
        ? "translateX(0) scale(1)"
        : index < currentIndex
          ? "translateX(-30px) scale(0.95)"
          : "translateX(40px) scale(0.96)";
      card.style.opacity = index === currentIndex ? "1" : "0";
    });
  };

  prevTestimonialBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + testimonialCards.length) % testimonialCards.length;
    updateTestimonialSlider();
  });

  nextTestimonialBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonialCards.length;
    updateTestimonialSlider();
  });

  updateTestimonialSlider();
}

// Connect-text touch/mouse interaction: add a class so shadow appears on touch
document.addEventListener('DOMContentLoaded', () => {
  const connectCards = document.querySelectorAll('.connect-text');
  if (!connectCards.length) return;

  connectCards.forEach((el) => {
    // make focusable
    if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '0');

    const add = () => el.classList.add('touch-active');
    const remove = () => el.classList.remove('touch-active');

    el.addEventListener('touchstart', add, {passive: true});
    el.addEventListener('touchend', remove);
    el.addEventListener('touchcancel', remove);

    el.addEventListener('mousedown', add);
    el.addEventListener('mouseup', remove);
    el.addEventListener('mouseleave', remove);

    el.addEventListener('focus', add);
    el.addEventListener('blur', remove);
  });
});


  document.querySelectorAll("nav a").forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("text-[#48BD4C]", "font-bold");
    }
  });

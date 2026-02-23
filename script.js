// nav animation
const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll("nav a");
const navHeight = document.querySelector("nav").offsetHeight;

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((e) => e.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

    if (!visible.length) return;

    const id = visible[0].target.id;

    links.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  },
  { threshold: 0, rootMargin: `-${navHeight}px 0px -30% 0px` },
);

sections.forEach((section) => observer.observe(section));

// testimonial animation
var swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});

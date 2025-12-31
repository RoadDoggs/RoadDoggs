let scrollY = 0;
let ticking = false;

function updateParallax() {
  document.querySelectorAll(".parallax-el, .parallax-scroll").forEach((el) => {
    const speed = parseFloat(el.getAttribute("data-speed") || 0);
    const rect = el.getBoundingClientRect();

    if ((rect.top < window.innerHeight + 100) & (rect.bottom > -100)) {
      const yPos = scrollY * speed;
      const rot = scrollY * 0.01;

      el.style.transform = `translate3d(0, ${yPos}px, 0) rotate(${
        rot * speed * 10
      }deg)`;
    }
  });
}

document.addEventListener("scroll", () => {
  scrollY = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateParallax();
      ticking = false;
    });
    ticking = true;
  }
});

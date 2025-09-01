document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".about-section");

  function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add("visible");
      } else {
        section.classList.remove("visible");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // Initial check
});

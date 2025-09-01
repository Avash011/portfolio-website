document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll(".project");

  function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.85;

    projects.forEach((project) => {
      const projectTop = project.getBoundingClientRect().top;

      if (projectTop < triggerBottom) {
        project.classList.add("visible");
      } else {
        project.classList.remove("visible");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // Initial check
});

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector("#menu-btn");
  const navbar = document.querySelector(".navbar");

  menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  // Close menu when clicking anywhere else
  document.addEventListener("click", (e) => {
    if (!menuBtn.contains(e.target) && !navbar.contains(e.target)) {
      navbar.classList.remove("active");
    }
  });

  // Close menu when a link is clicked
  const navLinks = document.querySelectorAll(".navbar a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
    });
  });

  // Close menu on window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 767) {
      navbar.classList.remove("active");
    }
  });
});

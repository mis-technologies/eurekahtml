document.addEventListener("DOMContentLoaded", () => {
  const openMenu = document.getElementById("openMenu");
  const closeMenu = document.getElementById("closeMenu");
  const navBar = document.getElementById("nav-bar");
  const navLinks = document.querySelectorAll(".nav-items");

  openMenu.addEventListener("click", () => {
    navBar.style.display = "flex";
  });

  closeMenu.addEventListener("click", () => {
    navBar.style.display = "none";
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      link.classList.toggle("active");
      if (window.innerWidth <= 800) {
        navBar.style.display = "none";
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
      navBar.style.display = "flex";
    }
  });
});

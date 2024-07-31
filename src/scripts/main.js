document.addEventListener("DOMContentLoaded", () => {
  // Nav Bar Functionality
  function initializeNavBar() {
    const openMenu = document.getElementById("openMenu");
    const navBar = document.getElementById("mobileNav");
    const navLinks = document.querySelectorAll("#mobileNav .nav-items a");

    if (openMenu && navBar) {
      openMenu.addEventListener("click", () => {
        navBar.classList.toggle("navOpen");
        navBar.style.display = navBar.classList.contains("navOpen") ? "flex" : "none";
      });

      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          if (window.innerWidth <= 800) {
            navBar.style.display = "none";
            navBar.classList.remove("navOpen");
          }
        });
      });

      window.addEventListener("resize", () => {
        navBar.style.display = window.innerWidth > 800 ? "flex" : "none";
        if (window.innerWidth > 800) {
          navBar.classList.remove("navOpen");
        }
      });

      window.addEventListener("scroll", () => {
        const navbar = document.querySelector("header");
        if (navbar) {
          navbar.classList.toggle("fixed-nav", window.pageYOffset >= navbar.offsetTop);
        }
      });
    } else {
      console.error("Nav bar elements not found.");
    }
  }

  // Scroll to Top Function
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Form Validation and Popup
  function checkMessage(formId) {
    const form = document.getElementById(formId);
    if (form) {
      const name = form.querySelector('input[name="name"]').value.trim();
      const email = form.querySelector('input[name="email"]').value.trim();
      const subject = form.querySelector('input[name="subject"]').value.trim();
      const message = form.querySelector('textarea[name="message"]').value.trim();

      if (!name || !email || !subject || !message) {
        alert("Please fill in all required fields.");
        event.preventDefault();
        return false;
      }
      popUp();
    }
  }

  function popUp() {
    const submitPopup = document.getElementById("submit_popup");
    const submitLoader = document.getElementById("submit_loader");
    const submitSuccess = document.getElementById("submit_success");

    if (submitPopup && submitLoader && submitSuccess) {
      submitPopup.classList.add("show");
      submitLoader.style.display = "block";

      setTimeout(() => {
        submitLoader.style.display = "none";
        submitSuccess.style.display = "block";

        setTimeout(() => {
          window.location.href = "index.html";
        }, 2000);
      }, 1000);
    } else {
      console.error("Popup elements not found.");
    }
  }

  // Registration Page Transition
  function initializeRegistrationPage() {
    const applyButton = document.getElementById("apply-button");
    const continueButton = document.getElementById("continue-button");

    if (applyButton && continueButton) {
      const transitioned = () => {
        const firstForm = document.getElementById("contact-form");
        const secondForm = document.getElementById("second-form");
        const imageContainer = document.getElementById("image-container");
        const formContainer = document.getElementById("form-container");

        if (firstForm && secondForm && imageContainer && formContainer) {
          formContainer.classList.add("transitioning", "move-right");
          imageContainer.classList.add("transitioning", "move-left");

          formContainer.addEventListener("transitionend", (event) => {
            if (event.target === formContainer) {
              formContainer.classList.remove("transitioning", "move-right");
              imageContainer.classList.remove("transitioning", "move-left");

              formContainer.classList.add("new-position-form");
              imageContainer.classList.add("new-position-image");

              firstForm.classList.add("hidden");
              secondForm.classList.remove("hidden");
            }
          }, { once: true });
        }
      };

      continueButton.addEventListener("click", transitioned);
      applyButton.addEventListener("click", popUp);
    }
  }

  // Text Animation
  function initializeTextAnimation() {
    const textContainer = document.getElementById("text-container");

    if (textContainer) {
      const texts = [
        { text: "an Advocate", colorClass: "color1" },
        { text: "a Spokesman", colorClass: "color2" },
        { text: "a Patron", colorClass: "color3" },
      ];
      let currentIndex = 0;
      let forwardFlip = true;

      setInterval(() => {
        textContainer.classList.add(forwardFlip ? "flip-forward" : "flip-backward");

        setTimeout(() => {
          currentIndex = (currentIndex + 1) % texts.length;
          textContainer.textContent = texts[currentIndex].text;
          textContainer.classList.remove("color1", "color2", "color3", "color4");
          textContainer.classList.add(texts[currentIndex].colorClass);

          if (currentIndex === texts.length - 1) {
            forwardFlip = !forwardFlip;
          }

          textContainer.classList.remove("flip-forward", "flip-backward");
        }, 400);
      }, 3000);
    }
  }

  // Initialize Components
  initializeNavBar();
  initializeRegistrationPage();
  initializeTextAnimation();
});

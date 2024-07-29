document.addEventListener("DOMContentLoaded", () => {
  // Nav bar script
  const openMenu = document.getElementById("openMenu");
  const navBar = document.getElementById("mobileNav");
  const navLinks = document.querySelectorAll("#mobileNav .nav-items a");

  // Debugging logs to check if elements are correctly selected
  console.log("openMenu:", openMenu);
  console.log("navBar:", navBar);
  console.log("navLinks:", navLinks);

  // Ensure necessary elements are present before attaching event listeners
  if (openMenu && navBar) {
    openMenu.addEventListener("click", () => {
      navBar.classList.toggle("navOpen");
      if (navBar.classList.contains("navOpen")) {
        navBar.style.display = "flex";
      } else {
        navBar.style.display = "none";
      }
    });

    if (navLinks.length > 0) {
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          if (window.innerWidth <= 800) {
            navBar.style.display = "none";
            navBar.classList.remove("navOpen");
          }
        });
      });
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth > 800) {
        navBar.style.display = "flex";
        navBar.classList.remove("navOpen");
      } else {
        navBar.style.display = "none";
      }
    });

    window.addEventListener("scroll", () => {
      const navbar = document.querySelector("header");
      if (navbar) {
        const navBarOffset = navbar.offsetTop;

        if (window.pageYOffset >= navBarOffset) {
          navbar.classList.add("fixed-nav");
        } else {
          navbar.classList.remove("fixed-nav");
        }
      }
    });
  } else {
    console.error("openMenu or navBar element not found.");
  }
  // End of Nav bar script
});

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Message Form
const checkMessage = (formId) => {
  const form = document.getElementById(formId);
  if (form) {
    const name = form.querySelector('input[name="name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const subject = form.querySelector('input[name="subject"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();

    let isValid = true;

    if (name === "" || email === "" || subject === "" || message === "") {
      isValid = false;
      alert("Please fill in all required fields.");
    }

    if (!isValid) {
      event.preventDefault();
      return false; // Prevent form submission if validation fails
    }

    popUp();
  }
};

// Pop Up
const popUp = () => {
  const submitPopup = document.getElementById("submit_popup");
  const submitLoader = document.getElementById("submit_loader");
  const submitSuccess = document.getElementById("submit_success");

  if (submitPopup && submitLoader && submitSuccess) {
    submitPopup.classList.add("show");
    submitLoader.style.display = "block";

    setTimeout(function () {
      submitLoader.style.display = "none";
      submitSuccess.style.display = "block";

      // Redirect after 2 seconds
      setTimeout(function () {
        window.location.href = "index.html";
      }, 2000);
    }, 1000);
  } else {
    console.error("One or more elements for popUp function not found.");
  }
};

// Script for the registration page
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

      formContainer.addEventListener(
        "transitionend",
        function (event) {
          if (event.target === formContainer) {
            formContainer.classList.remove("transitioning", "move-right");
            imageContainer.classList.remove("transitioning", "move-left");

            formContainer.classList.add("new-position-form");
            imageContainer.classList.add("new-position-image");

            firstForm.classList.add("hidden");
            secondForm.classList.remove("hidden");
          }
        },
        { once: true }
      );
    }
  };

  continueButton.addEventListener("click", transitioned);
  applyButton.addEventListener("click", popUp);
}

// Text animation
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
    if (forwardFlip) {
      textContainer.classList.add("flip-forward");
    } else {
      textContainer.classList.add("flip-backward");
    }

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
// End of registration page script

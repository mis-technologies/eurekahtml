document.addEventListener("DOMContentLoaded", () => {
  // Nav Bar Functionality
  function initializeNavBar() {
    const openMenu = document.getElementById("openMenu");
    const navBar = document.getElementById("mobileNav");
    const navLinks = document.querySelectorAll(
      "#nav-bar ul li a, #mobileNav ul li a"
    );

    if (openMenu && navBar) {
      openMenu.addEventListener("click", () => {
        navBar.classList.toggle("navOpen");
        navBar.style.display = navBar.classList.contains("navOpen")
          ? "flex"
          : "none";
      });

      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          if (window.innerWidth <= 768) {
            navBar.style.display = "none";
            navBar.classList.remove("navOpen");
          }
        });
      });

      function handleResize() {
        if (window.innerWidth > 768) {
          navBar.style.display = "none";
          navBar.classList.remove("navOpen");
        } else {
          navBar.style.display = navBar.classList.contains("navOpen")
            ? "flex"
            : "none";
        }
      }

      window.addEventListener("resize", handleResize);
      handleResize(); // Call once to set initial state
    }
  }

  // Scroll to Top Function
  function initializeScrollToTop() {
    const readBtn = document.querySelectorAll(".readArticle");

    readBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
  }

  // Form Validation
  function checkMessage(formId) {
    const form = document.getElementById(formId);
    if (form) {
      const fields = {
        name: form.querySelector('input[name="name"]'),
        email: form.querySelector('input[name="email"]'),
        subject: form.querySelector('input[name="subject"]'),
        message: form.querySelector('textarea[name="message"]'),
        phone: form.querySelector('input[name="phone"]'),
        address: form.querySelector('input[name="address"]'),
      };

      let isValid = true;
      let emptyFields = [];

      for (const [fieldName, field] of Object.entries(fields)) {
        if (field && field.value.trim() === "") {
          isValid = false;
          emptyFields.push(fieldName);
        }
      }

      if (!isValid) {
        alert(
          `Please fill in the following required fields: ${emptyFields.join(
            ", "
          )}`
        );
        event.preventDefault();
        return false;
      }

      // popUp();
      return true;
    }
  }

  // popUp Function called inother functions
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
    const firstForm = document.getElementById("signUpForm");
    const secondForm = document.getElementById("second-form");
    const formContainer = document.getElementById("form-container");
    const imageContainer = document.getElementById("image-container");
    const dot1 = document.getElementById("dot1");
    const dot2 = document.getElementById("dot2");

    // Function to check if all inputs in a form are filled
    const checkFormInputs = (form) => {
      const inputs = form.querySelectorAll("input[required]");
      let allFilled = true;

      inputs.forEach((input) => {
        if (input.value.trim() === "") {
          allFilled = false;
        }
      });

      return allFilled;
    };

    // Function to change button state if the form validates
    const toggleButtonState = (form, button) => {
      if (checkFormInputs(form)) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    };

    if (firstForm && secondForm && imageContainer && formContainer) {
      // Add input event listeners to first form
      firstForm.querySelectorAll("input[required]").forEach((input) => {
        input.addEventListener("input", () =>
          toggleButtonState(firstForm, continueButton)
        );
      });

      // Add input event listeners to second form
      secondForm.querySelectorAll("input[required]").forEach((input) => {
        input.addEventListener("input", () =>
          toggleButtonState(secondForm, applyButton)
        );
      });

      // Transition to second form on clicking continueButton
      const transitioned = () => {
        if (!continueButton.disabled) {
          formContainer.classList.add("transitioning", "move-right");
          imageContainer.classList.add("transitioning", "move-left");

          formContainer.addEventListener(
            "transitionend",
            (event) => {
              if (event.target === formContainer) {
                formContainer.classList.remove("transitioning", "move-right");
                imageContainer.classList.remove("transitioning", "move-left");

                formContainer.classList.add("new-position-form");
                imageContainer.classList.add("new-position-image");

                firstForm.classList.add("hidden");
                secondForm.classList.remove("hidden");

                // Update dots to reflect the current form
                dot1.classList.remove("active");
                dot2.classList.add("active");
              }
            },
            { once: true }
          );
        }
      };

      // Transition to second form on clicking continueButton
      continueButton.addEventListener("click", transitioned);

      // Handle form submission on clicking applyButton
      applyButton.addEventListener("click", () => {
        if (!applyButton.disabled) {
          popUp();
        }
      });
    }
  }

  // Text Animation
  function initializeTextAnimation() {
    const textContainers = [
      document.getElementById("text-container"),
      document.getElementById("text-container2"),
    ];

    if (textContainers[0] || textContainers[1]) {
      const texts = [
        { text: "an Advocate.", colorClass: "color1" },
        { text: "a Spokesman.", colorClass: "color2" },
        { text: "a Patron.", colorClass: "color3" },
      ];
      let currentIndex = 0;
      let forwardFlip = true;

      setInterval(() => {
        textContainers.forEach((textContainer) => {
          if (textContainer) {
            textContainer.classList.add(
              forwardFlip ? "flip-forward" : "flip-backward"
            );

            setTimeout(() => {
              currentIndex = (currentIndex + 1) % texts.length;
              textContainer.textContent = texts[currentIndex].text;
              textContainer.classList.remove("color1", "color2", "color3");
              textContainer.classList.add(texts[currentIndex].colorClass);

              if (currentIndex === texts.length - 1) {
                forwardFlip = !forwardFlip;
              }

              textContainer.classList.remove("flip-forward", "flip-backward");
            }, 400);
          }
        });
      }, 3000);
    }
  }

  // Popup Functionality
  function initializePopUp(formId) {
    const form = document.getElementById(formId);
    if (form) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (checkMessage(formId)) {
          popUp();
        }
      });
    }
  }

  // Accordain Functionality
  function initializeAccordion() {
    const accordionHeaders = document.querySelectorAll("#accordion-header");

    accordionHeaders.forEach((header) => {
      header.addEventListener("click", () => {
        const content = header.nextElementSibling;

        header.classList.toggle("active");

        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    });
  }

  // Events Cards Animation
  function initializeEventCards() {
    const cards = document.querySelectorAll(".event-card");

    const resetCards = () => {
      cards.forEach((card) => {
        card.classList.remove("expanded", "collapsed");
        card.classList.add("default");
        card.querySelector(".hidden-content").style.display = "none";
        card.querySelector("img").style.display = "block";
      });
    };

    const expandCard = (cardToExpand, cardToCollapse) => {
      resetCards();
      cardToExpand.classList.remove("default", "collapsed");
      cardToExpand.classList.add("expanded");
      cardToExpand.querySelector(".hidden-content").style.display = "block";
      cardToExpand.querySelector("img").style.display = "block";

      cardToCollapse.classList.remove("default", "expanded");
      cardToCollapse.classList.add("collapsed");
      cardToCollapse.querySelector(".hidden-content").style.display = "none";
      cardToCollapse.querySelector("img").style.display = "none";
    };

    const showAllContent = () => {
      cards.forEach((card) => {
        card.classList.remove("expanded", "collapsed", "default");
        card.querySelector(".hidden-content").style.display = "block";
        card.querySelector("img").style.display = "block";
      });
    };

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        showAllContent();
        cards.forEach((card) => {
          card.removeEventListener("mouseenter", cardMouseEnterHandler);
          card.removeEventListener("mouseleave", resetCards);
        });
      } else {
        resetCards();
        cards.forEach((card) => {
          card.addEventListener("mouseenter", cardMouseEnterHandler);
          card.addEventListener("mouseleave", resetCards);
        });
      }
    };

    const cardMouseEnterHandler = function () {
      if (this.id === "card1") {
        expandCard(this, document.getElementById("card2"));
      } else if (this.id === "card2") {
        expandCard(this, document.getElementById("card1"));
      } else if (this.id === "card3") {
        expandCard(this, document.getElementById("card4"));
      } else if (this.id === "card4") {
        expandCard(this, document.getElementById("card3"));
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial state
  }

  // Initialize Components
  initializeNavBar();
  initializeRegistrationPage();
  initializeTextAnimation();
  initializePopUp("contactForm");
  initializePopUp("faq");
  initializeAccordion();
  initializeEventCards();
  initializeScrollToTop();
});

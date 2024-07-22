// When the DOM is loaded, execute this code
document.addEventListener("DOMContentLoaded", () => {
  // Nav bar script
  const openMenu = document.getElementById("openMenu");
  const closeMenu = document.getElementById("closeMenu");
  const navBar = document.getElementById("mobileNav");
  const navLinks = document.querySelectorAll(".nav-items");

  openMenu.addEventListener("click", () => {
    // navBar.style.display = "flex";
    navBar.classList.toggle("navOpen");
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
  //  End of Nav bar script

  // Card effect for the Event section
  const cards = document.querySelectorAll(".card");
  const card1 = document.getElementById("card-1");
  const card2 = document.getElementById("card-2");
  const card3 = document.getElementById("card-3");
  const card4 = document.getElementById("card-4");

  cards.forEach((card) => {
    card.classList.add("row-2");
  });

  // card effect on bigger screens
  if (window.innerWidth > 800) {
    // card 1
    card1.addEventListener("mouseover", () => {
      card4.classList.remove("row-2");
      card4.querySelector("img").style.visibility = "hidden";
      card1.querySelector(".paragraph").style.visibility = "visible";
      card1.classList.add("row-3");
    });
    card1.addEventListener("mouseout", () => {
      card4.classList.add("row-2");
      card4.querySelector("img").style.visibility = "visible";
      card1.classList.remove("row-3");
      card1.querySelector(".paragraph").style.visibility = "hidden";
    });

    // card 2
    card2.addEventListener("mouseover", () => {
      card4.classList.remove("row-2");
      card4.querySelector("img").style.visibility = "hidden";
      card2.classList.add("row-3");
      card2.querySelector(".paragraph").style.visibility = "visible";
    });
    card2.addEventListener("mouseout", () => {
      card4.classList.add("row-2");
      card4.querySelector("img").style.visibility = "visible";
      card2.classList.remove("row-3");
      card2.querySelector(".paragraph").style.visibility = "hidden";
    });

    // card 3
    card3.addEventListener("mouseover", () => {
      card1.classList.remove("row-2");
      card1.querySelector("img").style.visibility = "hidden";
      card3.classList.add("row-3");
      card3.querySelector(".paragraph").style.visibility = "visible";
    });
    card3.addEventListener("mouseout", () => {
      card1.classList.add("row-2");
      card1.querySelector("img").style.visibility = "visible";
      card3.classList.remove("row-3");
      card33.querySelector(".paragraph").style.visibility = "hidden";
    });

    // card 4
    card4.addEventListener("mouseover", () => {
      card2.classList.remove("row-2");
      card2.querySelector("img").style.visibility = "hidden";
      card3.classList.add("row-3");
      card3.querySelector(".paragraph").style.visibility = "visible";
    });
    card4.addEventListener("mouseout", () => {
      card3.classList.remove("row-3");
      card2.classList.add("row-2");
      card2.querySelector("img").style.visibility = "visible";
      card3.querySelector(".paragraph").style.visibility = "hidden";
    });
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 640) {
      // card 1
      card1.addEventListener("mouseover", () => {
        card4.classList.remove("row-2");
        card4.querySelector("img").style.visibility = "hidden";
        card1.querySelector(".paragraph").style.visibility = "visible";
        card1.classList.add("row-3");
      });
      card1.addEventListener("mouseout", () => {
        card4.classList.add("row-2");
        card4.querySelector("img").style.visibility = "visible";
        card1.classList.remove("row-3");
        card1.querySelector(".paragraph").style.visibility = "hidden";
      });

      // card 2
      card2.addEventListener("mouseover", () => {
        card4.classList.remove("row-2");
        card4.querySelector("img").style.visibility = "hidden";
        card2.classList.add("row-3");
        card2.querySelector(".paragraph").style.visibility = "visible";
      });
      card2.addEventListener("mouseout", () => {
        card4.classList.add("row-2");
        card4.querySelector("img").style.visibility = "visible";
        card2.classList.remove("row-3");
        card2.querySelector(".paragraph").style.visibility = "hidden";
      });

      // card 3
      card3.addEventListener("mouseover", () => {
        card1.classList.remove("row-2");
        card1.querySelector("img").style.visibility = "hidden";
        card3.classList.add("row-3");
        card3.querySelector(".paragraph").style.visibility = "visible";
      });
      card3.addEventListener("mouseout", () => {
        card1.classList.add("row-2");
        card1.querySelector("img").style.visibility = "visible";
        card3.classList.remove("row-3");
        card33.querySelector(".paragraph").style.visibility = "hidden";
      });

      // card 4
      card4.addEventListener("mouseover", () => {
        card2.classList.remove("row-2");
        card2.querySelector("img").style.visibility = "hidden";
        card3.classList.add("row-3");
        card3.querySelector(".paragraph").style.visibility = "visible";
      });
      card4.addEventListener("mouseout", () => {
        card3.classList.remove("row-3");
        card2.classList.add("row-2");
        card2.querySelector("img").style.visibility = "visible";
        card3.querySelector(".paragraph").style.visibility = "hidden";
      });
    }
    console.log("window resize, please refresh page");
  });
  // End of card hover effect for the event section

  // Accordain Section
  const accordionHeaders = document.querySelectorAll(".accordion-header");

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

  // End of DomContentLoaded
});

// Scrool to top function
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Message Form
const checkMessage = (formId) => {
  const form = document.getElementById(formId);
  const name = form.querySelector(`input[name="name"]`).value;
  const email = form.querySelector(`input[name="email"]`).value;
  const phoneNumber = form.querySelector(`input[name="phone"]`).value;
  const subject = form.querySelector(`input[name="subject"]`).value;
  const message = form.querySelector(`textarea[name="message"]`).value;

  // if (message.value.trim() < 11) {
  //   alert("Please enter a message");
  //   return false;
  // }

  popUp();

  return false;
};

const popUp = () => {
  const popUp = document.getElementById("popUp");
  const loader = document.getElementById("loader");
  const success = document.getElementById("success");

  popUp.classList.add("show");

  setTimeout(function () {
    loader.style.display = "none";
    success.style.display = "flex";

    // Redirect after 10 seconds
    setTimeout(function () {
      window.location.href = "index.html";
    }, 2100);
  }, 1000);
};

// // Nav bar script
// window.addEventListener("scroll", function () {
//   var navbar = document.querySelector(".container");
//   var navBarOffset = navbar.offsetTop;

//   if (window.pageYOffset >= navBarOffset) {
//     navbar.classList.add("fixed-nav");
//   } else {
//     navbar.classList.remove("fixed-nav");
//   }
// });

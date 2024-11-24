const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn ? menuBtn.querySelector("i") : null;

if (menuBtn && navLinks && menuBtnIcon) {
  // Toggle navigation menu and update icon
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
  });

  // Close navigation menu when clicking on links
  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  });
} else {
  console.error("Menu button or navigation links not found in the DOM.");
}

// ScrollReveal Configuration
if (typeof ScrollReveal !== "undefined") {
  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
    easing: "ease-in-out",
  };

  // Elements to animate with ScrollReveal
  const elementsToReveal = [
    { selector: ".header_container .section_subheader", delay: 0 },
    { selector: ".header_container h1", delay: 500 },
    { selector: ".header_container .btn", delay: 1000 },
    { selector: ".room_card", delay: 0, interval: 500 },
    { selector: ".feature_card", delay: 0, interval: 500 },
  ];

  // Loop through and apply ScrollReveal animations
  elementsToReveal.forEach(({ selector, delay = 0, interval = 0 }) => {
    ScrollReveal().reveal(selector, {
      ...scrollRevealOption,
      delay,
      interval,
    });
  });
} else {
  console.error("ScrollReveal.js library is not loaded.");
}

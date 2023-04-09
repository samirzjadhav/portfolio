// Menu Show
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

// Remove Menu Mobile
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: false,
});

const defaultScrollRevealDelay = 50;

/*SCROLL HOME*/
sr.reveal(".home-title", {});
sr.reveal(".home-scroll", { delay: defaultScrollRevealDelay });
sr.reveal(".home-img", { origin: "right", delay: defaultScrollRevealDelay });

/*SCROLL ABOUT*/
sr.reveal(".about-img", { delay: defaultScrollRevealDelay });
sr.reveal(".about-subtitle", { delay: defaultScrollRevealDelay });
sr.reveal(".about-profession", { delay: defaultScrollRevealDelay });
sr.reveal(".about-text", { delay: defaultScrollRevealDelay });
sr.reveal(".about-social-icon", {
  delay: defaultScrollRevealDelay,
  interval: 200,
});

/*SCROLL SKILLS*/
sr.reveal(".skills-subtitle", {});
sr.reveal(".skills-name", {
  distance: "20px",
  delay: defaultScrollRevealDelay,
  interval: 100,
});
sr.reveal(".skills-img", { delay: defaultScrollRevealDelay });

/*SCROLL PORTFOLIO*/
sr.reveal(".portfolio-img", { interval: 50 });

/*SCROLL CONTACT*/
sr.reveal(".contact-subtitle", {});
sr.reveal(".contact-text", { interval: 50 });
sr.reveal(".contact-input", { delay: defaultScrollRevealDelay });
sr.reveal(".contact-button", { delay: defaultScrollRevealDelay });

// loader
function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  setInterval(loader, 100);
}

window.onload = fadeOut;

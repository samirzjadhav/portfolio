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
const navLink = document.querySelectorAll(".nav_link");

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
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/*SCROLL HOME*/
sr.reveal(".home_title", {});
sr.reveal(".home_scroll", { delay: 200 });
sr.reveal(".home_img", { origin: "right", delay: 400 });

/*SCROLL ABOUT*/
sr.reveal(".about_img", { delay: 500 });
sr.reveal(".about_subtitle", { delay: 300 });
sr.reveal(".about_profession", { delay: 400 });
sr.reveal(".about_text", { delay: 500 });
sr.reveal(".about_social-icon", { delay: 600, interval: 200 });

/*SCROLL SKILLS*/
sr.reveal(".skills_subtitle", {});
sr.reveal(".skills_name", { distance: "20px", delay: 50, interval: 100 });
sr.reveal(".skills_img", { delay: 400 });

/*SCROLL PORTFOLIO*/
sr.reveal(".portfolio_img", { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal(".contact_subtitle", {});
sr.reveal(".contact_text", { interval: 200 });
sr.reveal(".contact_input", { delay: 400 });
sr.reveal(".contact_button", { delay: 600 });

// loader
function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  setInterval(loader, 1000);
}

window.onload = fadeOut;

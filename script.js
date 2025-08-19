const navContainer = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav__link');
const navLink = document.querySelector('.nav__link');
const namePopup = document.querySelector(".name__popup");
const homeIntro = document.querySelector(".home__intro");
const mainHeader = document.querySelectorAll(".main__header");
const mainPage = document.querySelector("main");
const projectPage = document.querySelector(".project__page");
const projectsSection = document.querySelector(".projects__section");
const projectDetails = document.querySelectorAll(".project__details");

function updateNavbarContent() {
  if (window.innerWidth > 600) {
    navLinks.forEach((link) => (link.innerHTML = link.dataset.content));
  }
  if (window.innerWidth <= 600) {
    navLinks.forEach(
      (link) =>
        (link.innerHTML = `<i class="${link.dataset.content__mobile}"></i>`)
    );
  }
}

// Run once at start
updateNavbarContent();

// Run on window resize
window.addEventListener("resize", updateNavbarContent);

navContainer.addEventListener("mouseover", function (e) {
  if (window.innerWidth > 600) return; // do nothing on large screens
  const link = e.target.closest(".nav__link");
  if (!link) return;
  link.innerHTML = link.dataset.content;
});

navContainer.addEventListener("mouseout", function (e) {
  if (window.innerWidth > 600) return; // do nothing on large screens
  const link = e.target.closest(".nav__link");
  if (!link) return;
  link.innerHTML =
    link.innerHTML = `<i class="${link.dataset.content__mobile}"></i>`;
});

// Hero Section
window.addEventListener("load", function () {
  namePopup.classList.remove("hidden");
  namePopup.classList.add("show");
  this.setTimeout(() => {
    namePopup.classList.add("hidden");
    namePopup.classList.remove("show");
    homeIntro.classList.add("show");
  }, 2000);
});

/////////////////////////////////////////
// Reveal Section
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.remove("section--hidden");

    const header = entry.target.querySelector(".main__header");
    if (header) {
      header.classList.add("rotate__header");
      setTimeout(() => {
        header.classList.remove("rotate__header");
      }, 600);
    }
    // observer.unobserve(entry.target);
    console.log("section observed");
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach((section) => {
  section.classList.add("section--hidden");
  sectionObserver.observe(section);
});

// Handle Details project button

projectsSection.addEventListener("click", (e) => {
  e.preventDefault();
  if (!e.target.classList.contains("glassy-btn")) return;

  const id = e.target.dataset.id;
  console.log(id);
  // const btnProjectDetails = e.target.querySelector(".glassy-btn");

  mainPage.classList.add("hidden");
  projectPage.classList.remove("hidden");
  document.getElementById(`proj--${id}`).classList.remove("hidden");

  // scroll to top
  window.scroll({ top: 0, behavior: "smooth" });
});

// Handle Back to Home Page
projectPage.addEventListener("click", function (e) {
  if (!e.target.classList.contains("btn__back__home")) return;

  e.preventDefault();

  projectPage.classList.add("hidden");
  projectDetails.forEach((project) => project.classList.add("hidden"));

  mainPage.classList.remove("hidden");

  // scroll to top
  window.scroll({ top: 0, behavior: "smooth" });
});
const navContainer = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav__link');
const navLink = document.querySelector('.nav__link');

function updateNavbarContent() {
  if (window.innerWidth > 600) {
    navLinks.forEach((link) => link.innerHTML = link.dataset.content)
  }
  if (window.innerWidth <= 600) {
    navLinks.forEach((link) => link.innerHTML = `<i class="${link.dataset.content__mobile}"></i>`);
  }
}

// Run once at start
updateNavbarContent();

// Run on window resize
window.addEventListener('resize', updateNavbarContent);

navContainer.addEventListener('mouseover', function(e) {
  if (window.innerWidth > 600) return; // do nothing on large screens
  const link = e.target.closest('.nav__link');
  if(!link) return;
  link.innerHTML = link.dataset.content;
});

navContainer.addEventListener('mouseout', function(e) {
  if (window.innerWidth > 600) return; // do nothing on large screens
  const link = e.target.closest('.nav__link');
  if(!link) return;
  link.innerHTML = link.innerHTML = `<i class="${link.dataset.content__mobile}"></i>`;
});
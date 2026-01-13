// 1. ELEMENTEN SELECTEREN
const openButton = document.querySelector('.menu-open');
const closeButton = document.querySelector('.menu-close');
const mobileMenu = document.querySelector('.mobile-menu');

// 2. MENU OPENEN
openButton.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
});

// 3. MENU SLUITEN
closeButton.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
});

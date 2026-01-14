// 1. ELEMENTEN SELECTEREN
const openButton = document.querySelector('.menu-open');
const closeButton = document.querySelector('.menu-close');
const mobileMenu = document.querySelector('.mobile-menu');

const functiesButton = document.querySelector('.functies-btn');
const functiesItem = document.querySelector('.functies');

const branchesButton = document.querySelector('.branches-btn');
const branchesItem = document.querySelector('.branches');

const sliderTrack = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slider-track .vacature');
const dots = document.querySelectorAll('.dot');

// 2. MENU OPENEN
openButton.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
});

// 3. MENU SLUITEN
closeButton.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
  functiesItem.classList.remove('open');
  branchesItem.classList.remove('open');
});

// 4. FUNCTIES OPENEN / SLUITEN
functiesButton.addEventListener('click', () => {
  functiesItem.classList.toggle('open');
  branchesItem.classList.remove('open');
});

// 5. BRANCHES OPENEN / SLUITEN
branchesButton.addEventListener('click', () => {
  branchesItem.classList.toggle('open');
  functiesItem.classList.remove('open');
});

// // 6. SLIDER DOTS (KLIK + SCROLL)
// if (sliderTrack && slides.length && dots.length) {

//   function setActiveDot(index) {
//     dots.forEach(d => d.classList.remove('is-active'));
//     if (dots[index]) dots[index].classList.add('is-active');
//   }

//   sliderTrack.addEventListener('scroll', () => {
//     const slideWidth = slides[0].offsetWidth;
//     const index = Math.round(sliderTrack.scrollLeft / slideWidth);
//     setActiveDot(index);
//   });

//   dots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//       const slideWidth = slides[0].offsetWidth;
//       sliderTrack.scrollLeft = index * slideWidth;
//       setActiveDot(index);
//     });
//   });
// }

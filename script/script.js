// ELEMENTEN SELECTEREN
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

// START: MENU IS ECHT DICHT
mobileMenu.hidden = true;

// MENU OPENEN (smooth)
openButton.addEventListener('click', () => {
  mobileMenu.hidden = false; // menu bestaat nu voor screenreaders

  // 1 frame wachten zodat de browser eerst de "dichte" state kan tekenen
  requestAnimationFrame(() => {
    mobileMenu.classList.add('is-open'); // nu gaat hij smooth open
    closeButton.focus();                 // focus naar sluitknop
  });
});

// MENU SLUITEN (smooth)
closeButton.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');

  // alles ook dichtzetten
  functiesItem.classList.remove('open');
  branchesItem.classList.remove('open');

  // wacht tot animatie klaar is, dan pas echt verbergen
  setTimeout(() => {
    mobileMenu.hidden = true;
    openButton.focus(); // focus terug naar hamburger
  }, 300);
});

// FUNCTIES OPENEN / SLUITEN
functiesButton.addEventListener('click', () => {
  functiesItem.classList.toggle('open');
  branchesItem.classList.remove('open');
});

// BRANCHES OPENEN / SLUITEN
branchesButton.addEventListener('click', () => {
  branchesItem.classList.toggle('open');
  functiesItem.classList.remove('open');
});

// SLIDER DOTS (KLIK + SCROLL)
// if is nodig zodat je geen error krijgt als je dit op een pagina zonder slider gebruikt.
if (sliderTrack && slides.length && dots.length) {

  function setActiveDot(index) {
    dots.forEach(d => d.classList.remove('is-active'));
    if (dots[index]) dots[index].classList.add('is-active');
  }

  sliderTrack.addEventListener('scroll', () => {
    const slideWidth = slides[0].offsetWidth;
    const index = Math.round(sliderTrack.scrollLeft / slideWidth);
    setActiveDot(index);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      const slideWidth = slides[0].offsetWidth;
      sliderTrack.scrollLeft = index * slideWidth;
      setActiveDot(index);
    });
  });
}

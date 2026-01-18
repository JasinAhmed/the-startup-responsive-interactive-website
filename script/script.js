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
//TABS voor de funciteomschrijving en
const tabButtons = document.querySelectorAll('.detail-tab');
const tabPanels = document.querySelectorAll('.detail-tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {

    // 1) active tab wisselen
    tabButtons.forEach(b => b.classList.remove('is-active'));
    button.classList.add('is-active');

    // 2) content wisselen
    tabPanels.forEach(panel => panel.classList.add('is-hidden'));
    const targetPanel = document.getElementById(button.dataset.tab);
    targetPanel.classList.remove('is-hidden');
  });
});



  //  SOLLICITATIE POPUP (HEEL SIMPEL)
   

// ELEMENTEN SELECTEREN
const openSollicitatieBtn = document.getElementById('openSollicitatie');
const sollicitatieModal = document.getElementById('sollicitatieModal');
const closeSollicitatieBtn = document.getElementById('closeSollicitatie');

// POPUP OPENEN
openSollicitatieBtn.addEventListener('click', () => {
  // laat de popup zien
  sollicitatieModal.showModal();
});

// POPUP SLUITEN
closeSollicitatieBtn.addEventListener('click', () => {
  // sluit de popup
  sollicitatieModal.close();
});

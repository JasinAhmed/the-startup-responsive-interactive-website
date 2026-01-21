 // ELEMENTEN SELECTEREN
// knop om het mobiele menu te openen (hamburger)
const openButton = document.querySelector('.menu-open');

// knop om het mobiele menu te sluiten (kruisje)
const closeButton = document.querySelector('.menu-close');

// het mobiele menu zelf
const mobileMenu = document.querySelector('.mobile-menu');

// knop "Functies" in het menu
const functiesButton = document.querySelector('.functies-btn');

// het submenu dat bij "Functies" hoort
const functiesItem = document.querySelector('.functies');

// knop "Branches" in het menu
const branchesButton = document.querySelector('.branches-btn');

// het submenu dat bij "Branches" hoort
const branchesItem = document.querySelector('.branches');

// de slider (het element dat horizontaal scrolt)
const sliderTrack = document.querySelector('.slider-track');

// alle slides/vacatures in de slider
const slides = document.querySelectorAll('.slider-track .vacature');

// alle bolletjes (dots) onder de slider
const dots = document.querySelectorAll('.dot');

// het menu is bij het laden van de pagina echt dicht
// hidden = true betekent: niet zichtbaar en niet focusbaar
mobileMenu.hidden = true;

  // MENU OPENEN

// als je op de hamburger klikt
openButton.addEventListener('click', () => {

  // menu zichtbaar maken (bestaat nu ook voor screenreaders)
  mobileMenu.hidden = false;

  // 1 frame wachten zodat de browser dit eerst kan verwerken
  requestAnimationFrame(() => {

    // class toevoegen zodat CSS-animatie start
    mobileMenu.classList.add('is-open');

    // focus verplaatsen naar de sluitknop (toegankelijkheid)
    closeButton.focus();
  });
});

  // MENU SLUITEN

// als je op het kruisje klikt
closeButton.addEventListener('click', () => {

  // class verwijderen → animatie sluit
  mobileMenu.classList.remove('is-open');

  // ook de submenu’s sluiten
  functiesItem.classList.remove('open');
  branchesItem.classList.remove('open');

  // wachten tot animatie klaar is (300ms)
  setTimeout(() => {

    // menu daarna pas echt verbergen
    mobileMenu.hidden = true;

    // focus terug naar hamburger
    openButton.focus();
  }, 300);
});

  // FUNCTIES SUBMENU

// als je op "Functies" klikt
functiesButton.addEventListener('click', () => {

  // functies submenu open/dicht zetten
  functiesItem.classList.toggle('open');

  // branches submenu altijd sluiten
  branchesItem.classList.remove('open');
});

  // BRANCHES SUBMENU

// als je op "Branches" klikt
branchesButton.addEventListener('click', () => {

  // branches submenu open/dicht zetten
  branchesItem.classList.toggle('open');

  // functies submenu altijd sluiten
  functiesItem.classList.remove('open');
});

  // SLIDER DOTS (KLIK + SCROLL)

// deze if zorgt ervoor dat de code alleen draait
// als de slider ook echt op de pagina staat
if (sliderTrack && slides.length && dots.length) {

  // functie om de juiste dot actief te maken
  function setActiveDot(index) {

    // eerst alle dots uitzetten
    dots.forEach(d => d.classList.remove('is-active'));

    // daarna de juiste dot aanzetten
    if (dots[index]) {
      dots[index].classList.add('is-active');
    }
  }
  // als je scrolt door de slider
  sliderTrack.addEventListener('scroll', () => {

    // breedte van 1 slide
    const slideWidth = slides[0].offsetWidth;

    // berekenen welke slide in beeld is
    const index = Math.round(sliderTrack.scrollLeft / slideWidth);

    // bijbehorende dot actief maken
    setActiveDot(index);
  });

  // als je op een dot klikt
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {

      // breedte van 1 slide
      const slideWidth = slides[0].offsetWidth;

      // slider naar juiste slide scrollen
      sliderTrack.scrollLeft = index * slideWidth;

      // juiste dot actief maken
      setActiveDot(index);
    });
  });
}
  // TABS (FUNCTIEOMSCHRIJVING / DETAILS)
// alle tab knoppen
const tabButtons = document.querySelectorAll('.detail-tab');

// alle tab content panels
const tabPanels = document.querySelectorAll('.detail-tab-content');

// voor elke tab knop
tabButtons.forEach(button => {
  button.addEventListener('click', () => {

    // alle tabs inactief maken
    tabButtons.forEach(b => b.classList.remove('is-active'));

    // aangeklikte tab actief maken
    button.classList.add('is-active');

    // alle panels verbergen
    tabPanels.forEach(panel => panel.classList.add('is-hidden'));

    // juiste panel tonen via data-tab attribuut
    const targetPanel = document.getElementById(button.dataset.tab);
    targetPanel.classList.remove('is-hidden');
  });
});

// SOLLICITATIE POPUP

// knop om de popup te openen
const sollicitatieButton = document.querySelector('#openSollicitatie');

// de dialog (popup)
const sollicitatieModal = document.querySelector('#sollicitatieModal');

// als je op "Solliciteer nu" klikt
sollicitatieButton.addEventListener('click', () => {

  // popup openen
  sollicitatieModal.showModal();
});

// als je ergens op de popup of achtergrond klikt
sollicitatieModal.addEventListener('click', () => {

  // popup sluiten
  sollicitatieModal.close();
});

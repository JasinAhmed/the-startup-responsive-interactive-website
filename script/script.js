// 1. ELEMENTEN SELECTEREN
let openButton = document.querySelector('.menu-open')
let closeButton = document.querySelector('.menu-close')
let mobileMenu = document.querySelector('.mobile-menu')

// 2. EVENT TOEVOEGEN
hamburger.addEventListener("click", function () {

  // 3. ACTIE: MENU OPEN/DICHT
  const isOpen = navList.classList.toggle("open");

  hamburger.classList.toggle("open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
});

 

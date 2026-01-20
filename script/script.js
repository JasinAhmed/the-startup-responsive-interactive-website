
// MENU: ELEMENTEN OPZOEKEN

const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const mobileMenu = document.querySelector(".mobile-menu");


// ACCORDION: ELEMENTEN OPZOEKEN

const functiesKnop = document.querySelector(".functies-btn");
const functiesItem = document.querySelector(".functies");

const branchesKnop = document.querySelector(".branches-btn");
const branchesItem = document.querySelector(".branches");



// MENU OPENEN / SLUITEN

menuOpen.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);

function openMenu() {
  mobileMenu.classList.add("is-open");
  mobileMenu.removeAttribute("hidden");
}

function closeMenu() {
  mobileMenu.classList.remove("is-open");
  mobileMenu.setAttribute("hidden", "");

  // ook de dropdowns dicht
  functiesItem.classList.remove("open");
  branchesItem.classList.remove("open");
}


// ACCORDION FUNCTIES

functiesKnop.addEventListener("click", toggleFuncties);

function toggleFuncties() {
  functiesItem.classList.toggle("open");
  branchesItem.classList.remove("open");
}



// ACCORDION BRANCHES

branchesKnop.addEventListener("click", toggleBranches);

function toggleBranches() {
  branchesItem.classList.toggle("open");
  functiesItem.classList.remove("open");
}

// =====================================
// MOBIEL MENU
// =====================================

// de hamburger button opzoeken in de HTML
const menuButton = document.querySelector(".menu-open")

// het kruisje opzoeken in de HTML
const closeButton = document.querySelector(".menu-close")

// het mobiele menu opzoeken in de HTML
const mobileMenu = document.querySelector(".mobile-menu")

// op de hamburger klikken
menuButton.addEventListener("click", openMenu)

// op het kruisje klikken
closeButton.addEventListener("click", closeMenu)

// functie om het menu te openen
function openMenu() {
  mobileMenu.classList.add("is-open")
  mobileMenu.removeAttribute("hidden")
}

// functie om het menu te sluiten
function closeMenu() {
  mobileMenu.classList.remove("is-open")
  mobileMenu.setAttribute("hidden", "")
}



// =====================================
// ACCORDION (DROPDOWN IN MOBIEL MENU)
// =====================================

// de functies knop opzoeken
const functiesButton = document.querySelector(".functies-btn")

// het functies blok opzoeken
const functiesItem = document.querySelector(".functies")

// de branches knop opzoeken
const branchesButton = document.querySelector(".branches-btn")

// het branches blok opzoeken
const branchesItem = document.querySelector(".branches")

// op functies klikken
functiesButton.addEventListener("click", toggleFuncties)

// op branches klikken
branchesButton.addEventListener("click", toggleBranches)

// functie voor functies dropdown
function toggleFuncties() {
  functiesItem.classList.toggle("open")
  branchesItem.classList.remove("open")
}

// functie voor branches dropdown
function toggleBranches() {
  branchesItem.classList.toggle("open")
  functiesItem.classList.remove("open")
}



// =====================================
// TABS (FUNCTIEPAGINA)
// =====================================

// tab buttons opzoeken
const tabButton1 = document.querySelector('[data-tab="tab-werktijden"]')
const tabButton2 = document.querySelector('[data-tab="tab-functie"]')
const tabButton3 = document.querySelector('[data-tab="tab-bieden"]')

// tab content opzoeken
const tabContent1 = document.querySelector("#tab-werktijden")
const tabContent2 = document.querySelector("#tab-functie")
const tabContent3 = document.querySelector("#tab-bieden")

// luisteren naar clicks
tabButton1.addEventListener("click", showTab1)
tabButton2.addEventListener("click", showTab2)
tabButton3.addEventListener("click", showTab3)

// functie tab 1
function showTab1() {
  tabButton1.classList.add("is-active")
  tabButton2.classList.remove("is-active")
  tabButton3.classList.remove("is-active")

  tabContent1.classList.remove("is-hidden")
  tabContent2.classList.add("is-hidden")
  tabContent3.classList.add("is-hidden")
}

// functie tab 2
function showTab2() {
  tabButton2.classList.add("is-active")
  tabButton1.classList.remove("is-active")
  tabButton3.classList.remove("is-active")

  tabContent2.classList.remove("is-hidden")
  tabContent1.classList.add("is-hidden")
  tabContent3.classList.add("is-hidden")
}

// functie tab 3
function showTab3() {
  tabButton3.classList.add("is-active")
  tabButton1.classList.remove("is-active")
  tabButton2.classList.remove("is-active")

  tabContent3.classList.remove("is-hidden")
  tabContent1.classList.add("is-hidden")
  tabContent2.classList.add("is-hidden")
}



// =====================================
// SLIDER DOTS (VACATURES)
// =====================================

// de slider opzoeken
const sliderTrack = document.querySelector(".slider-track")

// de vacatures opzoeken
const slide1 = document.querySelectorAll(".vacature")[0]
const slide2 = document.querySelectorAll(".vacature")[1]
const slide3 = document.querySelectorAll(".vacature")[2]

// de dots opzoeken
const dot1 = document.querySelectorAll(".dot")[0]
const dot2 = document.querySelectorAll(".dot")[1]
const dot3 = document.querySelectorAll(".dot")[2]

// luisteren naar clicks op dots
dot1.addEventListener("click", goToSlide1)
dot2.addEventListener("click", goToSlide2)
dot3.addEventListener("click", goToSlide3)

// functie slide 1
function goToSlide1() {
  sliderTrack.scrollLeft = slide1.offsetWidth * 0

  dot1.classList.add("is-active")
  dot2.classList.remove("is-active")
  dot3.classList.remove("is-active")
}

// functie slide 2
function goToSlide2() {
  sliderTrack.scrollLeft = slide1.offsetWidth * 1

  dot2.classList.add("is-active")
  dot1.classList.remove("is-active")
  dot3.classList.remove("is-active")
}

// functie slide 3
function goToSlide3() {
  sliderTrack.scrollLeft = slide1.offsetWidth * 2

  dot3.classList.add("is-active")
  dot1.classList.remove("is-active")
  dot2.classList.remove("is-active")
}

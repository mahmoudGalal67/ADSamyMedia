// Navbar

let navbar = document.querySelector(".navbar");

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");

menuOpenBtn.onclick = function () {
  navLinks.style.left = "-20px";
};
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-121%";
};

// sidebar submenu open close js code

let solutions = document.querySelector(".solutions-arrow");

solutions.onclick = function () {
  navLinks.classList.toggle("show1");
};
let movers = document.querySelector(".movers-arrow");

movers.onclick = function () {
  navLinks.classList.toggle("show2");
};

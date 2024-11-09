/**
 * add event loistener on multiple elements
 */

const addEventElements = function (elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/**
 * Preloader
 *
 * preloader will be visible until document is loaded
 */
const preloader = document.querySelector("[data-preloader]");
window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  this.document.body.classList.add("loaded");
});

/**
 * Mobile navbar
 *
 * show the mobile navbar when click menu button
 * hide the mobile navbar when click close button or overlay
 */

const navbar = document.querySelector("[data-navbar]");
const navToglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventElements(navToglers, "click", toggleNav);

/**
 * HEADER
 *
 * change header background color when scroll
 */

const header = document.querySelector("[data-header]");

const activeElementOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

window.addEventListener("scroll", activeElementOnScroll);

/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (
      revealElements[i].getBoundingClientRect().top <
      window.innerHeight / 1.15
    ) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
};

window.addEventListener("scroll", revealElementOnScroll);

window.addEventListener("load", revealElementOnScroll);

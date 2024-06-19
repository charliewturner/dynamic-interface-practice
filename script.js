const leftNav = document.querySelector(".left");
const rightNav = document.querySelector(".right");
const gallery = document.querySelector(".gallery");
const navDots = document.querySelector(".nav-dot");

// navDots.addEventListener("click", () => {
//   if (navDots.id == "off") {
//     navDots.id = "on";
//   }
// });

// function dotNavigate() {
//     var dots = document.getElementsByClassName("nav-dot");

// }

rightNav.addEventListener("click", () => {
  let galleryID = gallery.id;

  switch (galleryID) {
    case "position-1":
      gallery.id = "position-2";
      break;
    case "position-2":
      gallery.id = "position-3";
      break;
    case "position-3":
      gallery.id = "position-4";
      break;
    case "position-4":
      gallery.id = "position-5";
      break;
    case "position-5":
      gallery.id = "position-6";
      break;
    case "position-6":
      gallery.id = "position-7";
      break;
    default:
      console.log("Cannot navigate further right");
  }
});

leftNav.addEventListener("click", () => {
  let galleryID = gallery.id;

  switch (galleryID) {
    case "position-7":
      gallery.id = "position-6";
      break;
    case "position-6":
      gallery.id = "position-5";
      break;
    case "position-5":
      gallery.id = "position-4";
      break;
    case "position-4":
      gallery.id = "position-3";
      break;
    case "position-3":
      gallery.id = "position-2";
      break;
    case "position-2":
      gallery.id = "position-1";
      break;
    default:
      console.log("Cannot navigate further left");
  }
});

const navDotContainer = document.getElementById("nav-dot-container");
const dot1 = document.getElementById("nav-dot-1");
const dot2 = document.getElementById("nav-dot-2");
const dot3 = document.getElementById("nav-dot-3");
const dot4 = document.getElementById("nav-dot-4");
const dot5 = document.getElementById("nav-dot-5");
const dot6 = document.getElementById("nav-dot-6");
const dot7 = document.getElementById("nav-dot-7");

dot1.addEventListener("click", () => {
  gallery.id = "position-1";
  navDotContainer.id = "active";
});

dot2.addEventListener("click", () => {
  gallery.id = "position-2";
  navDotContainer.id = "active";
});

dot3.addEventListener("click", () => {
  gallery.id = "position-3";
  navDotContainer.id = "active";
});

dot4.addEventListener("click", () => {
  gallery.id = "position-4";
  navDotContainer.id = "active";
});

dot5.addEventListener("click", () => {
  gallery.id = "position-5";
  navDotContainer.id = "active";
});

dot6.addEventListener("click", () => {
  gallery.id = "position-6";
  navDotContainer.id = "active";
});

dot7.addEventListener("click", () => {
  gallery.id = "position-7";
  navDotContainer.id = "active";
});

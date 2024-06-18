const leftNav = document.querySelector(".left");
const rightNav = document.querySelector(".right");
const gallery = document.querySelector(".gallery");
const navDots = document.querySelectorAll(".nav-dot");

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

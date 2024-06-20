const leftNav = document.querySelector(".left");
const rightNav = document.querySelector(".right");
const gallery = document.querySelector(".gallery");

//Left and right arrow functions

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

//Nav dot functionality

const navDotContainer = document.getElementById("container");

document.getElementById("nav-dot-1").addEventListener("click", () => {
  navDotContainer.className = "nav-dot-container first_selected";
  gallery.id = "position-1";
});

document.getElementById("nav-dot-2").addEventListener("click", () => {
  navDotContainer.className = "nav-dot-container second_selected";
  gallery.id = "position-2";
});
document.getElementById("nav-dot-3").addEventListener("click", () => {
  navDotContainer.className = "nav-dot-container third_selected";
  gallery.id = "position-3";
});
document.getElementById("nav-dot-4").addEventListener("click", () => {
  navDotContainer.className = "nav-dot-container fourth_selected";
  gallery.id = "position-4";
});
document.getElementById("nav-dot-5").addEventListener("click", () => {
  navDotContainer.className = "nav-dot-container fifth_selected";
  gallery.id = "position-5";
});
document.getElementById("nav-dot-6").addEventListener("click", () => {
  navDotContainer.className = "nav-dot-container sixth_selected";
  gallery.id = "position-6";
});
document.getElementById("nav-dot-7").addEventListener("click", () => {
  navDotContainer.className = "nav-dot-container seventh_selected";
  gallery.id = "position-7";
});

//Slideshow timer

function changeImage() {
  let galleryID = gallery.id;

  switch (galleryID) {
    case "position-1":
      gallery.id = "position-2";
      navDotContainer.className = "nav-dot-container second_selected";
      break;
    case "position-2":
      gallery.id = "position-3";
      navDotContainer.className = "nav-dot-container third_selected";
      break;
    case "position-3":
      gallery.id = "position-4";
      navDotContainer.className = "nav-dot-container fourth_selected";
      break;
    case "position-4":
      gallery.id = "position-5";
      navDotContainer.className = "nav-dot-container fifth_selected";
      break;
    case "position-5":
      gallery.id = "position-6";
      navDotContainer.className = "nav-dot-container sixth_selected";
      break;
    case "position-6":
      gallery.id = "position-7";
      navDotContainer.className = "nav-dot-container seventh_selected";
      break;
    case "position-7":
      gallery.id = "position-1";
      navDotContainer.className = "nav-dot-container first_selected";
      break;
    default:
      console.log("Cannot navigate further left");
  }
}

setInterval("changeImage()", 5000);

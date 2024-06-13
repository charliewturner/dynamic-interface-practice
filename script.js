// const dropdownContainer = document.querySelector(".dropdown-container");
// let hidden = document.querySelector("drop");

// dropdownContainer.addEventListener("mouseover", () => {
//   console.log("boop");
//   revealHidden();
//   hidden.style.display = "block";
// });

// function revealHidden() {
//   document.querySelector(".hidden").style.display = "block";
// }

const leftNav = document.querySelector(".left");
const rightNav = document.querySelector(".right");
const gallery = document.querySelector(".gallery");

// rightNav.addEventListener("click", () => {
//   gallery.style.right = 250 + "px";
// });

// leftNav.addEventListener("click", () => {
//   moveLeft();
// });

// function moveLeft() {
//   gallery.style.left = gallery.style.left + "250px";
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

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

rightNav.addEventListener("click", () => {
  gallery.style.right = 250 + "px";
});

leftNav.addEventListener("click", () => {
  moveLeft();
});

function moveLeft() {
  gallery.style.left = gallery.style.left + "250px";
}

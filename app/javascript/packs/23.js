//DOM

const nav = document.querySelector("#main");
const navTop = nav.offsetTop;
const logo = nav.querySelector(".logo");
const back = document.querySelector(".back");

const heightBack = back.height.animVal.value;

// functions

function checkNav() {
  if (navTop <= scrollY) {
    logo.classList.add("show-logo");
    
  } else {
    logo.classList.remove("show-logo");
    
  }
  if (navTop - 90 <= scrollY) {
    back.classList.add("back-down");
  } else {
    back.classList.remove("back-down");
  }
  console.log(heightBack);
  console.log(back);
}
// listeners

window.addEventListener('scroll', checkNav);
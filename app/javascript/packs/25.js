// dom
const slider = document.querySelector(".items");

let isDown = false;
let startX;
let scrollLeft;


// function


// eventlisteners

slider.addEventListener("mousedown", (eve) => {
  isDown = true;
  slider.classList.add("active");
  startX = eve.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft; // store in var cause scrollleft changes while moving and we need to go back to initial state
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (eve) => {
  if (!isDown) return;
  eve.preventDefault;
  const mouseX = eve.pageX - slider.offsetLeft; // same as above but we need to recalculate offset everytime we move the mouse
  const walk = (mouseX - startX) * 2; // makes scrolling faster
  slider.scrollLeft = scrollLeft - walk; // since walk is 0, we need to substract from initial scrollLeft. otherwise slider would jump back.
});
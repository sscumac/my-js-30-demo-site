// DOM elements

const categorySection = document.querySelector(".categories-selection");
const categoryBoxes = categorySection.querySelectorAll("a");
const contentSection = document.querySelector(".category-content");
const close = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const contentDefault = document.querySelector(".category-content-default");
const buttonAll = document.querySelector(".all");

// functions

let articelPresent = false;

function toggleContentDefault() {
  contentDefault.classList.toggle("invisible");
  contentDefault.classList.toggle("visible");
}

function hideArticel() {
  if (articelPresent) {
    const articelToHide = document.querySelector(`.visible`);
    toggleContentDefault();
    articelToHide.classList.remove("visible");
    articelToHide.classList.add("invisible");
    articelPresent = false;
  }
}

function showArticel() {
  if (!articelPresent) {
    toggleContentDefault();
    const articelToShow = document.querySelector(`.category-content-${this.dataset.cat}`);
    articelToShow.classList.remove("invisible");
    articelToShow.classList.add("visible");
    articelPresent = true;
  }
}

function hideOverlay() {
  overlay.classList.remove("opacity")
  setTimeout(() => {
    overlay.classList.remove("on");
    toggleContentDefault();
  }, 500);
}

function showOverlay() {
  contentDefault.classList.contains("invisible") && toggleContentDefault();
  overlay.classList.add("on");
  setTimeout(() => {
    overlay.classList.add("opacity");
  }, 10);
}

// event listeners

categoryBoxes.forEach((box) => {
  box.addEventListener("mouseenter", showArticel);
  box.addEventListener("mouseleave", hideArticel);
  box.addEventListener("focusin", showArticel);
  box.addEventListener("focusout", hideArticel);
});

buttonAll.addEventListener("click", showOverlay);
close.addEventListener("click", hideOverlay);

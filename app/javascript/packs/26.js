// dom
const triggers = document.querySelectorAll(".nice > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

// functions

function handleEnter() {
  this.classList.add("trigger-enter");
  setTimeout(() => {
    if (this.classList.contains("trigger-enter")) this.classList.add("trigger-enter-active")
  }, 150); // only arrow function inherites from parent function (otherwise "this" would be window)
  setTimeout(() => background.classList.add("open"), 150); // only arrow function inherites from parent function (otherwise "this" would be window)
  // background.classList.add("open");

  const dropdown = this.querySelector(".dropdown"); // this changes so we need to select it here
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    left: dropdownCoords.left - navCoords.left,
    top: dropdownCoords.top - navCoords.top
  }

  background.style.setProperty("width", `${coords.width}px`);
  background.style.setProperty("height", `${coords.height}px`);
  background.style.setProperty("top", `${coords.top}px`);
  background.style.setProperty("left", `${coords.left}px`);

  console.log(navCoords, dropdownCoords);
}

function handleLeave() {
  this.classList.remove("trigger-enter-active");
  setTimeout(() => this.classList.remove("trigger-enter"), 150);
  setTimeout(() => background.classList.remove("open"), 150);
  // background.classList.remove("open");
}

// listeners

triggers.forEach((trigger) => trigger.addEventListener("mouseenter", handleEnter));
triggers.forEach((trigger) => trigger.addEventListener("mouseleave", handleLeave));
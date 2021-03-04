// DOM

const panels = document.querySelectorAll(".panel");
console.log(panels);
// functions

function openUp() {
  removeInfo();
  this.classList.toggle("open");
}

function flyIn(e) {
  console.log(e);
  if (e.propertyName === "font-size") { // so fylIn is only triggered once (not twice which re-toggles)
    this.classList.toggle("in");
  }
}

function removeInfo() {
  const info = document.getElementById("info-5");
  info.style.display = "none";
}


// eventListener
panels.forEach((panel) => {
  panel.addEventListener("click", openUp);
  panel.addEventListener("transitionend", flyIn);
})

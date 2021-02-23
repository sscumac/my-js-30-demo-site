// DOM

const panels = document.querySelectorAll(".panel");
console.log(panels);
// functions

function openUp() {
  this.classList.toggle("open");
}

function flyIn(e) {
  console.log(e);
  if (e.propertyName === "font-size") { // so fylIn is only triggered once (not twice which re-toggles)
    this.classList.toggle("in");
  }
}


// eventListener
panels.forEach((panel) => {
  panel.addEventListener("click", openUp);
  panel.addEventListener("transitionend", flyIn);
})

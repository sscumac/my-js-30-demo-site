// dom
const divs = document.querySelectorAll("div");
const button = document.querySelector("button");
const bubbleButton = document.querySelector(".bubble");
const bubbleOutput = document.querySelector(".bubbleOut");



let bubbling = true;
let capture = false;


// functions

function logText(eve) {
  alert(this.classList.value)
  if (!bubbling) {
    eve.stopPropagation(); // stops bubbling with the target that was clicked on
  }
}

function toggleBubbling() {
  bubbling = !bubbling;
  if (bubbling) {
    bubbleOutput.innerHTML = " on";
  } else {
    bubbleOutput.innerHTML = "off";
  } 
}


// event listeners

bubbleButton.addEventListener("click", toggleBubbling);

button.addEventListener("click", () => {
  button.style.backgroundColor = "rgb(80, 80, 80)";
  setTimeout(function delay() { // without delay it would fire alert before button.style
    alert("click")
  }, 100)}, {
    once: true
});


divs.forEach((div)=> div.addEventListener(("click"), logText, {
    capture: false // capture: true will set the eventhandler on the capturing phase
}));
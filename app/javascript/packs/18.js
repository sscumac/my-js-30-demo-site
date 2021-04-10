// DOM

const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.append(highlight);

const content = document.querySelector(".content");
const button = document.querySelector(".button");
const message = document.querySelector(".message");

// function

function highlightLink() {
  const linkCoords = this.getBoundingClientRect(); // this is the magic here!
  console.log(linkCoords);
  const coords = {
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
  }
  highlight.style.width = `${linkCoords.width + 6}px`;
  highlight.style.height = `${linkCoords.height + 6}px`;
  highlight.style.transform = `translate(${coords.left - 3}px, ${coords.top - 3}px)`;
}

function start() {
  triggers.forEach((a) => a.addEventListener("mouseenter", highlightLink));
  content.style.opacity = 0.85;
  message.classList.add("hide");
}

// event listeners

button.addEventListener("click", start);



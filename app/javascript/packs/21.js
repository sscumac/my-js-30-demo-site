// DOM

const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.append(highlight);

// function

function highlightLink() {
  const linkCoords = this.getBoundingClientRect(); // this is the magic here!
  console.log(linkCoords);
  const coords = {
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
  }
  highlight.style.width = `${linkCoords.width}px`;
  highlight.style.height = `${linkCoords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

// event listeners

triggers.forEach((a) => a.addEventListener("mouseenter", highlightLink));
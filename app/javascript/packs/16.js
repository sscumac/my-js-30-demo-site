// dom

const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 100 // 100px which will be the area to drag the mouse
const button = document.querySelector(".button");
const messageBox = document.querySelector(".message");
// functions

function shadow(eve) {
  const height = hero.offsetHeight;
  const width = hero.offsetWidth;
  // can be done as one-liner as well:
  // const { offsetHeight: height, offsetWidth: width } = hero;

  let x = eve.offsetX;
  let y = eve.offsetY;
  // let {offsetX: x, offsetWidth: y} = eve

  const sinty = document.getElementById("sinty");

  if (eve.target !== this) {
    x = x + eve.target.offsetLeft; // offsetLeft: pixels from the upper left to the left of parent
    y = y + eve.target.offsetTop; // offsetTop: pixels from the top to the top of parent
  }

  const walkX = ((x / width) * walk) - (walk / 2);
  const walkY = ((y /height)*walk) - (walk/2);

  text.style.textShadow = `
    ${walkX}px ${walkY}px 0 rgb(255, 0, 255, 0.7),
    ${walkX * -1}px ${walkY}px 0 rgb(0, 255, 255, 0.7),
    ${walkX}px ${walkY * -1}px 0 rgb(255, 255, 0, 0.7)`; 

    
  let walkXpos = walkX;
  let walkYpos = walkY;
  if (walkX < 0) walkXpos = walkX * -1;
  if (walkY < 0) walkYpos = walkY * -1; 

  if (walkXpos > 5 || walkYpos > 5) {
      sinty.volume = (walkXpos + walkYpos) / 100;
      sinty.play();
  } else {
    sinty.pause();
  }
}

function start() {
  hero.addEventListener("mousemove", shadow);
  messageBox.classList.add("hide");
  text.style.opacity = 0.85;
}


// event listeners 

button.addEventListener("click", start)


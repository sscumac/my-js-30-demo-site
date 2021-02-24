const canvas = document.querySelector("#draw");
const ctx = canvas.getContext('2d'); // you always draw on the context not the canvas element

canvas.width = window.innerWidth; // make canvas as big as window
canvas.height = window.innerHeight;

ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 1;
ctx.globalCompositeOperation = 'overlay'; // blending mode ;)

let isDrawing = false; // flag to tell when to actually draw 
let lastX = 0; // helps us to draw a line by ystoring last mouse (x/Y)
let lastY = 0;
let hue = 0;
let direction = true;

function draw(event) {
  if (!isDrawing) return; // stop function from running when mouse not pressed

  // ctx.lineWidth = hue;
  ctx.strokeStyle = `hsl(${hue}, 10%, 50%)`;
  ctx.beginPath(); // Start a new path
  ctx.moveTo(lastX, lastY); // Move the pen to (x, y)
  ctx.lineTo(event.offsetX, event.offsetY); // Draw a line to (x, y)
  ctx.stroke(); // // Render the path
  [lastX, lastY] = [event.offsetX, event.offsetY]; // sets two variables in one line (destructuring an array)
  hue++;
  if (hue >= 360) hue = 0;
  console.log(direction);
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction; // flips the direction true/false
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }

  console.log(ctx.lineWidth);
}

const message = document.querySelector(".message");

// eventListeners
canvas.addEventListener("mousedown", (event) => {
  isDrawing = true;
  message.classList.add("hide");
  [lastX, lastY] = [event.offsetX, event.offsetY]; // lastX/Y upadet with starting position before drawing
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);



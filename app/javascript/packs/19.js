// dom

const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d'); // to actually render it
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

const photoButton = document.getElementById("photo");

// functions
function getVideo() {
  navigator.mediaDevices.getUserMedia({ video:true, audio:false}) // navigator.mediaDevices provides access to connected media input devices (webcam, microphones, screensharing)
    .then(localMediaStream => {
      console.log(localMediaStream);
      video.srcObject = localMediaStream; // converts the mediastream in something the videoplayer can understand
      video.play();
    })
    .catch(err => {
      console.error("oh comon' !!", err);
    });
}

function paintToCanvas() {
  const width = video.videoWidth; // the intrinsic width (resolution)
  const height = video.videoHeight;

  canvas.width = width;
  canvas.height = height;

  console.log(canvas);

  // ctx.drawImage(video, 0, 0, width, height);

  return setInterval(() => {  // with return you have access to it when you ever want to stop it from painting
    ctx.drawImage(video, 0, 0, width, height);
    // take pixels out
    let pixels = ctx.getImageData(0, 0, width, height); // representing a one-dimensional array containing the data in the RGBA order, with integer values between 0 and 255
    // mess with them
    // pixels = redEffect(pixels);
    pixels = greenScreen(pixels);
    // pixels = rgbSplit(pixels);
    ctx.globalAlpha = 0.2; // transparency to what is drawn (ghosting effect)
    // put them back in
    ctx.putImageData(pixels, 0, 0);
    // console.log(pixels);
    // debugger;
  }, 100);
}

function takePhoto() {
  // play the sound
  snap.currentTime = 0; // makes the sound start from beginning everytime you click
  snap.play();

  // get the data out of the canvas
  const data = canvas.toDataURL("image/jpeg");
  const link = document.createElement('a');
  link.href = data;
  
  link.setAttribute("download", "handsome");
  link.innerHTML = `<img src="${data}" alt="Handsome Person" />`;
  console.log(link);
  strip.insertBefore(link, strip.firstChild);
  // 
}

function redEffect(pixels) {
  // loop over pixel array 
  for(let i = 0; i <= pixels.data.length; i += 4) {   // for large arrays for() is wiser
    // console.log(pixels[i]);
    pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
  }
  return pixels;
}

function rgbSplit(pixels) {
  for (let i = 0; i <= pixels.data.length; i += 4) {   // for large arrays for() is wiser
    pixels.data[i - 150] = pixels.data[i + 0];  // RED
    pixels.data[i + 100] = pixels.data[i + 1]; // GREEN
    pixels.data[i - 150] = pixels.data[i + 2];  // Blue
  }
  return pixels;
}

function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value; // key - value -pair
  });

  console.log(levels);

  // lets check what the rgb values for ech pixel are
  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // we take all the values between min/max out
      pixels.data[i + 3] = 0; // the transparency value
    }
  }

  return pixels;
}

video.addEventListener('canplay', paintToCanvas);

getVideo();
// redEffect(pixels);

// listeners

photoButton.addEventListener("click", takePhoto);



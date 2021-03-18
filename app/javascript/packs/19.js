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
    const pixels = ctx.getImageData(0, 0, width, height);
    console.log(pixels);
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
  // link.textContent = "Download Image";
  link.innerHTML = `<img src="${data}" alt="Handsome Person" />`;
  console.log(link);
  strip.insertBefore(link, strip.firstChild);
  // 
}

video.addEventListener('canplay', paintToCanvas);

getVideo();

// listeners

photoButton.addEventListener("click", takePhoto);



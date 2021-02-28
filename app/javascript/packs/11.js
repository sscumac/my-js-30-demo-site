// DOM

const player = document.querySelector(".player");
const video = player.querySelector(".viewer");

const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");

const playButton = player.querySelector(".toggle");

const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

const fullScreenButton = document.getElementById("fullscreenImg");


// functions
function togglePlay() {
  // video.paused ? video.play() : video.pause(); // ternary
  video[video.paused ? "play" : "pause"](); // [] puts compresses the above
}

function toggleButton() {
  const icon = this.paused ? '►' : '❚ ❚' // "this" because it refers to video which has a paused method
  playButton.textContent = icon;
  console.log(typeof this.currentTime);
}

function skip() {
  const skipNum = parseInt(this.dataset.skip);
  video.currentTime += skipNum;
}

function handleRangeUpdate() {
  video[this.name] = this.value; // value/name is an input attribut! and playbackRate/volume one of video
}

function handleProgress() {
  // console.log(window.getComputedStyle(progressBar).flexBasis); // when reading a value written in CSS (and not in-line as style=blabla)
  progressBar.style.flexBasis = `${(video.currentTime / video.duration) * 100}%`;
  // console.log("handleProgress");
}

function scrub(eve) {
  // const progressWidth = parseInt(window.getComputedStyle(progress).width.split("p")[0]);
  const progressPos = (video.duration / progress.offsetWidth) * eve.offsetX;
  video.currentTime = progressPos;
  // console.log(eve);
}

function fullScreen() {
  if (!document.fullscreenElement) {
    player.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}



// event listeners

playButton.addEventListener("click", togglePlay);
video.addEventListener("pause", toggleButton);
video.addEventListener("play", toggleButton);
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", handleProgress);

skipButtons.forEach((button) => {
  button.addEventListener("click", skip);
});

ranges.forEach((range) => {
  range.addEventListener("change", handleRangeUpdate);
  range.addEventListener("mousemove", handleRangeUpdate);
})

let mousedown = false;

progress.addEventListener("mousedown", () => mousedown = true); // second parameter needs to be a function
progress.addEventListener("mouseup", () => mousedown = false);

progress.addEventListener("click", scrub);  // need to select the progressBar container, as the bar itself has changing size
progress.addEventListener("mousemove", (eve) => { if (mousedown === true) scrub(eve) });  // need to pass the event as scrub function needs to know the initial position   

fullScreenButton.addEventListener("click", fullScreen);





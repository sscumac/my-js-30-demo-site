window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // global variable that lives in the browser on window element (webkit in case it is not supported by the browser)

// initialize speech recognition
const recognition = new SpeechRecognition();
recognition.interimResults = true; // show results straight away (otherwise one needs to wait until stop speaking)
// recognition.continuous = true; // keeps on recognizing and returning results

const button = document.querySelector(".listen-button");
const gap = document.querySelector(".gap");
const message = document.querySelector(".message");

let p = document.createElement('p');
const words = document.querySelector(".words");
words.appendChild(p);

let listening = false;

// functions

function start() {
  recognition.start();
  button.classList.add("active");
  gap.classList.add("texting");
}

function end() {
  recognition.stop();
  button.classList.remove("active");
  gap.classList.remove("texting");
}

function toggleListening(eve) {
  message.classList.add("hide");
  listening ? end() : start();
  listening = !listening;
}

function newParagraph() {
  if (listening) recognition.start();
}

function speechText(e) {
  const transcript = Array.from(e.results)  // need to create an array from resultslist
    .map(result => (result[0].transcript))
    .join("")

  p.textContent = transcript;

  if (e.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
  }
}

// event listeners

// recognition.start();


button.addEventListener("click", (eve) => toggleListening());

recognition.addEventListener("result", speechText);

recognition.addEventListener("end", newParagraph);


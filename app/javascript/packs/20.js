window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // global variable that lives in the browser on window element (webkit in case it is not supported by the browser)

// initialize speech recognition
const recognition = new SpeechRecognition();
recognition.interimResults = true; // show results straight away (otherwise one needs to wait until stop speaking)
// recognition.continuous = true; // keeps on recognizing and returning results

const listen = document.getElementById("record");

let p = document.createElement('p');
const words = document.querySelector(".words");
words.appendChild(p);

// functions

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

recognition.start();

// listen.addEventListener("click", window.recognition.start);

recognition.addEventListener("result", speechText);

recognition.addEventListener("end", recognition.start);


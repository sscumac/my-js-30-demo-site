// DOM
const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector("[name='text']").value;  // .text is a property of the SpeechSynthesisUtterance interface
const textField = document.querySelector('textarea');

// functions 
function populateVoices() {
  voices = this.getVoices();
  console.log(voices);
  voicesDropdown.innerHTML = voices
    // .filter(voice => voice.lang.includes('de'))
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join("")
}

function setVoice() {
  msg.voice = voices.find(voice => (voice.name === this.value));
  toggle();
}

// if voice changed I wanna restart the entire thing
function toggle(startOver = true) {  // somethimes you wanna set to false to not restart itself
  speechSynthesis.cancel();
  if(startOver) speechSynthesis.speak(msg);
}

function setOption() {
  msg[this.name] = this.value;
  toggle();
}

// Eventlisteners

speechSynthesis.addEventListener('voiceschanged', populateVoices); // speechSynthesis = global Variable ; voicechanged = event of Web Speech API
voicesDropdown.addEventListener('change', setVoice);
textField.addEventListener('change', () => msg.text = document.querySelector("[name='text']").value);

options.forEach((option) => option.addEventListener('change', setOption));

speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false)); // as an additional function, false can be passed 

const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector("[name='text']").value;  // .text is a property of the SpeechSynthesisUtterance interface

function populateVoices() {
  voices = this.getVoices();
  console.log(voices);
  voicesDropdown.innerHTML = voices
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join("")
  // console.log(voiceOptions);
}

speechSynthesis.addEventListener('voiceschanged', populateVoices); // speechSynthesis = global Variable ; voicechanged = event of Web Speech API
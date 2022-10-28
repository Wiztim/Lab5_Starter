// explore.js

window.addEventListener('DOMContentLoaded', init);


function init() {
  let asdf = new SpeechSynthesisUtterance("hello world");
  //speechSynthesis.speak(asdf)
}

const synth = window.speechSynthesis;
const select = document.getElementById("voice-select");
var voiceList;
synth.addEventListener('voiceschanged', () => {
  voiceList = synth.getVoices();
  for (let i = 0; i < voiceList.length; i++) {
    let voiceEntry = voiceList[i].name + " (" + voiceList[i].lang + ")";
    let selectEntry = document.createElement("option");
    selectEntry.textContent = voiceEntry;
    select.append(selectEntry);
  }
});

const textArea = document.getElementById("text-to-speak");
const button = document.querySelector("button");
const image = document.querySelector("img");
button.addEventListener('click', () => {
  let ttsText = new SpeechSynthesisUtterance(textArea.value);
  ttsText.voice = voiceList[select.selectedIndex - 1];
  speechSynthesis.speak(ttsText);
});

setInterval(ttsSpeaking, 100);

function ttsSpeaking() {
  if (synth.speaking) {
    image.src = "assets/images/smiling-open.png";
  }
  else {
    image.src = "assets/images/smiling.png";
  }
}
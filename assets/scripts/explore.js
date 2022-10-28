// explore.js

// populate the list of voices
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

// convert input text into speech
const textArea = document.getElementById("text-to-speak");
const button = document.querySelector("button");
const image = document.querySelector("img");
button.addEventListener('click', () => {
  let ttsText = new SpeechSynthesisUtterance(textArea.value);
  ttsText.voice = voiceList[select.selectedIndex - 1];
  speechSynthesis.speak(ttsText);
});

// set an interval to check if the tts is talking, and update the image accordingly
setInterval(ttsSpeaking, 100);

function ttsSpeaking() {
  if (synth.speaking) {
    image.src = "assets/images/smiling-open.png";
  }
  else {
    image.src = "assets/images/smiling.png";
  }
}
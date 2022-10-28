// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
}
const selector = document.getElementById("horn-select");
const image = document.querySelector("img");
const sound = document.querySelector("audio");
selector.addEventListener('change', () => {
  switch (selector.value) {
    case "air-horn":
      image.src = "assets/images/air-horn.svg";
      sound.src = "assets/audio/air-horn.mp3";
      break;
    case "car-horn":
      image.src = "assets/images/car-horn.svg";
      sound.src = "assets/audio/car-horn.mp3";
      break;
    case "party-horn":
      image.src = "assets/images/party-horn.svg";
      sound.src = "assets/audio/party-horn.mp3";
      break;
    default:
      image.src = "assets/images/no-image.png";
      sound.src = "";
  }
});

const volumeLevel = document.getElementById("volume-controls").querySelector("input");
const volumeIcon = document.getElementById("volume-controls").querySelector("img")
volumeLevel.addEventListener('input', () => {
  const level = volumeLevel.value;
  if (level > 66) {
    volumeIcon.src = "assets/icons/volume-level-3.svg"
  }
  else if (level > 32) {
    volumeIcon.src = "assets/icons/volume-level-2.svg"
  }
  else if (level > 0) {
    volumeIcon.src = "assets/icons/volume-level-1.svg"
  }
  else {
    volumeIcon.src = "assets/icons/volume-level-0.svg"
  }

  sound.volume = level / 100;
});

const button = document.querySelector("button");
const jsConfetti = new JSConfetti(button);
button.addEventListener('click', () => {
  if (isNaN(sound.duration)) {
    alert("Select a horn!");
    return;
  }

  sound.play();
  if (selector.value == "party-horn") {
    jsConfetti.addConfetti();
  }
});
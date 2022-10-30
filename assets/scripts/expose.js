// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti();
  const select = document.getElementById("horn-select");
  const image = document.querySelector("img");

  select.addEventListener('input', function () {
    if (select.value == "air-horn") {
      image.src = "assets/images/air-horn.svg";
    }
    else if (select.value == "car-horn") {
      image.src = "assets/images/car-horn.svg";
    }
    else if (select.value == "party-horn") {
      image.src = "assets/images/party-horn.svg";
    }
  });

  const volume = document.querySelector("#volume-controls input");
  const volImage = document.querySelector("#volume-controls img")
  volume.addEventListener('input', function () {
    const volValue = volume.value;
    if (volValue == 0) {
      volImage.src = "assets/icons/volume-level-0.svg";
    }
    else if (volValue > 0 && volValue < 33) {
      volImage.src = "assets/icons/volume-level-1.svg";
    }
    else if (volValue >= 33 && volValue < 67) {
      volImage.src = "assets/icons/volume-level-2.svg";
    }
    else if (volValue >= 67) {
      volImage.src = "assets/icons/volume-level-3.svg";
    }
  });

  const play = document.querySelector('button');
  let audio = document.querySelector('audio');
  play.addEventListener('click', function () {
    if (select.value == "air-horn") {
      audio.src = "assets/audio/air-horn.mp3";
    }
    else if (select.value == "car-horn") {
      audio.src = "assets/audio/car-horn.mp3";
    }
    else if (select.value == "party-horn") {
      jsConfetti.addConfetti();
      audio.src = "assets/audio/party-horn.mp3";
    }
    audio.play();
  });
}
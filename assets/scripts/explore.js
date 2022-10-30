// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;

  const inputTxt = document.querySelector('#text-to-speak');
  const voiceSelect = document.querySelector('#voice-select');
  const play = document.querySelector('button');


  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  const image = document.querySelector('img');
  function display() {
    if (synth.speaking) {
      image.src = "assets/images/smiling-open.png";
    }
    else {
      image.src = "assets/images/smiling.png";
    };
  }
  setInterval(display);


  play.addEventListener('click', function () {
    const voiceSelect = document.querySelector('#voice-select')
    const inputTxt = document.querySelector('#text-to-speak');
    const image = document.querySelector('img');

    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    synth.speak(utterThis);
    inputTxt.blur();
  });




}
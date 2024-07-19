// Function allows user to change volume between hearing audios
let volume = 1; // Global volume variable

function updateVolume(value) {
  volume = value / 100; // Convert to range 0.0 - 1.0
}

function renderTTS(text) {
  var synthesis = window.speechSynthesis;

  console.log("Available Voices:");
  var voice = synthesis.getVoices().filter(function (voice) {
    console.log(voice.name + " " + voice.lang);
    return voice.name === 'Google UK English Female';
  })[0];

  // Create an utterance object
  var utterance = new SpeechSynthesisUtterance(text);

  // Set utterance properties
  utterance.voice = voice;
  utterance.pitch = 1;
  utterance.rate = 1;
  utterance.volume = volume; // Uses the global volume variable

  // Speak the utterance
  synthesis.speak(utterance);
}

function encourage() {
  // Get the name and words of encouragement
  let name = document.getElementById("name").value;
  let encouragement = document.getElementById("encouragement").value;
  let postScript = document.getElementById("post-script").value;

  // Combine into some text.
  let message = `Hello ${name}, I have something I would like to tell you. ${encouragement}. P.S. ${postScript}. Have a nice day!`

  // Render text to the user.
  renderTTS(message);
}

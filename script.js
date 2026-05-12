const btn = document.getElementById("listenBtn");
const output = document.getElementById("output");

const SpeechRecognition =
  window.SpeechRecognition ||
  window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

btn.addEventListener("click", () => {
  recognition.start();
});

recognition.onresult = (event) => {
  const transcript =
    event.results[0][0].transcript.toLowerCase();

  output.textContent = transcript;

  handleCommand(transcript);
};

function handleCommand(command) {

  if(command.includes("hello")){
    speak("Hello Purnima, how are you?");
  }

  else if(command.includes("your name")){
    speak("I am your AI Voice Assistant");
  }

  else if(command.includes("open youtube")){
    speak("Opening YouTube");
    window.open("https://youtube.com");
  }

  else if(command.includes("open google")){
    speak("Opening Google");
    window.open("https://google.com");
  }

  else if(command.includes("time")){
    const time = new Date().toLocaleTimeString();

    speak("Current time is " + time);
  }

  else{
    speak("Sorry, I did not understand");
  }
}

function speak(text){

  const speech = new SpeechSynthesisUtterance(text);

  speech.lang = "en-US";

  window.speechSynthesis.speak(speech);
}
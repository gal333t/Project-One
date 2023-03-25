//

const chosenWord = validWords[Math.floor(Math.random() * validWords.length)];

let letterCounter = 0;
let guessCounter = 0;

let letters = [];
let guesses = [];

function onStartUp() {
  guesses = document.querySelectorAll(".guess");
  console.log(guesses);
  newGuess();
}

function newGuess() {
  letters = guesses[guessCounter].querySelectorAll(".letter");
  console.log(letters);
}

onStartUp();

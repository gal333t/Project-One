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

// function onReturn() {
// on return key
// }

// keyboard

let output = document.getElementById("output");
let keys = document.getElementsByClassName("key");

for (let keyElement of keys) {
  let key = keyElement.textContent;
  keyElement.addEventListener("click", function () {
    // take the key clicked, and type into a box
    console.log(key);
    let div = document.getElementsByClassName("letter");
    let letter0 = document.createElement("p");
    letter0.textContent = key;
  });
}

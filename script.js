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

// keyboard

let output = document.getElementById("output");
let keys = document.getElementsByClassName("key");
for (let keyElement of keys) {
  let key = keyElement.textContent;
  keyElement.addEventListener("click", function () {
    switch (key) {
      case "␡":
        output.textContent = output.textContent.slice(
          0,
          output.textContent.length - 1
        );
        break;
      case "␡ all":
        output.textContent = "";
        break;
      default:
        output.textContent += key;
    }
  });
}

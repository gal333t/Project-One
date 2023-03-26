const chosenWord = validWords[Math.floor(Math.random() * validWords.length)];

let letterCounter = 0;
let guessCounter = 0;

let letters = [];
let guesses = [];

let clickedLetter = [];

function onStartUp() {
  guesses = document.querySelectorAll(".guess");
  console.log(guesses);
}

function newGuess() {
  letters = guesses[guessCounter].querySelectorAll(".letter");

  for (let i = 0; i < 5; i++) {
    // console.log(i);
    let p = document.createElement("p");
    p.setAttribute("id", `letter${[i]}`);
    p.textContent = clickedLetter[i];
    let div = letters[i];
    div.appendChild(p);
  }
}

onStartUp();

// keyboard

let output = document.getElementById("output");
let keys = document.getElementsByClassName("key");

for (let keyElement of keys) {
  let key = keyElement.textContent;
  keyElement.addEventListener("click", function () {
    console.log(key);
    clickedLetter.push(key);
  });
}

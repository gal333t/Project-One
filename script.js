const chosenWord = validWords[Math.floor(Math.random() * validWords.length)];
let chosenWordArr = chosenWord.split("");
// this will split the word into letters

let letterCounter = 0;
let guessCounter = 0;

let letters = [];
let guesses = [];

let clickedLetter = [];

function onStartUp() {
  guesses = document.querySelectorAll(".guess");
  console.log(guesses);
}

function onReturn() {
  letters = guesses[guessCounter].querySelectorAll(".letter");

  if (clickedLetter.length != 5) {
    alert("invalid word");
  } else {
    for (let i = 0; i < 5; i++) {
      // console.log(i);
      let p = document.createElement("p");
      p.textContent = clickedLetter[i];
      let div = letters[i];
      div.setAttribute("id", `letter${[i]}`);
      div.appendChild(p);
      checkWord();
    }
  }
}

function checkWord() {
  if (validWords.includes(clickedLetter.join("")) == false) {
    console.log("Word is not valid");
  }
}

// checkLetters() was pretty much copied from Geeks for Geeks website, adjusted to make it work for what I wanted
// this will end up being called onclick for the return button, once my current return function has been redone correctly for onclick of each key
function checkLetters(chosenWordArr, clickedLetter) {
  for (let i = 0; i < chosenWordArr.length; i++) {
    for (let x = 0; x < clickedLetter.length; x++) {
      if (chosenWordArr[i] === clickedLetter[x]) {
        let answer = document.getElementById(`letter${[x]}`).textContent;
        let div = document.getElementById(`letter${[x]}`);
        console.log(answer);
        div.setAttribute("class", "wrongPlace");
      }
    }
  }
}

checkLetters(chosenWordArr, clickedLetter);

function newGuess() {
  letters = guesses[guessCounter].querySelectorAll(".letter");
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

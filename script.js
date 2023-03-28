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

function onKeyInput() {
  letters = guesses[guessCounter].querySelectorAll(".letter");

  if (letterCounter.length > 4) {
    alert("invalid word");
  } else {
    let div = document.querySelectorAll(".letter");
    selectedDiv = div[letterCounter];
    let p = document.createElement("p");
    p.textContent = clickedLetter[letterCounter];
    selectedDiv.appendChild(p);
    ++letterCounter;
  }
}

function checkWord() {
  if (validWords.includes(clickedLetter.join("")) == false) {
    console.log("Word is not valid");
  } else {
    checkLetters(chosenWordArr, clickedLetter);
  }
}

// checkLetters() was pretty much copied from Geeks for Geeks website, adjusted to make it work for what I wanted
function checkLetters(chosenWordArr, clickedLetter) {
  for (let i = 0; i < chosenWordArr.length; i++) {
    for (let x = 0; x < clickedLetter.length; x++) {
      if (chosenWordArr[i] !== clickedLetter[x]) {
        let div1 = document.getElementById(`letter${[x]}`);
        div1.setAttribute("class", "wrongLetter");
      }

      // changed the if and else over but still overrides each other incorrectly
      else if (chosenWordArr[i] === clickedLetter[x]) {
        let answer = document.getElementById(`letter${[x]}`).textContent;
        let div = document.getElementById(`letter${[x]}`);
        console.log(answer);
        div.setAttribute("class", "wrongPlace");
      }
    }
  }
}

// checkLetters(chosenWordArr, clickedLetter);

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
    onKeyInput();
  });
}

function info() {
  alert(
    "What the different colours mean: X - correct letter in the wrong place. Y - correct letter & correct place"
  );
}

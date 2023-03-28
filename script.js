const chosenWord = validWords[Math.floor(Math.random() * validWords.length)];
let chosenWordArr = chosenWord.split("");
// this will split the word into letters

let letterCounter = 0;
let guessCounter = 0;

let letters = [];
let guesses = [];

let clickedLetters = [];

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
    selectedDiv.setAttribute("id", `letter${[letterCounter]}`);
    let p = document.createElement("p");
    p.textContent = clickedLetters[letterCounter];
    selectedDiv.appendChild(p);
    ++letterCounter;
  }
}

function onReturn() {
  if (validWords.includes(clickedLetters.join("")) == false) {
    console.log("Word is not valid");
  } else {
    checkLetters(chosenWordArr, clickedLetters);
  }
}

// originally copied an idea from Geeks from Geeks, adjusted with help from Sean and Robert
function checkLetters(chosenWordArr, clickedLetters) {
  console.log(clickedLetters);
  for (let i = 0; i < clickedLetters.length; i++) {
    if (chosenWordArr.indexOf(clickedLetters[i]) == i) {
      let div = document.getElementById(`letter${i}`);
      div.setAttribute("class", "rightWord");
    } else if (chosenWordArr.indexOf(clickedLetters[i]) >= 0) {
      // let answer = document.getElementById(`letter${i}`).textContent;
      let div = document.getElementById(`letter${i}`);
      div.setAttribute("class", "wrongPlace");
    } else {
      let div = document.getElementById(`letter${i}`);
      div.setAttribute("class", "wrongLetter");
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
    clickedLetters.push(key);
    onKeyInput();
  });
}

function info() {
  alert(
    "What the different colours mean: X - correct letter in the wrong place. Y - correct letter & correct place"
  );
}

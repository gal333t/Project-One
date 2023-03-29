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
    // let row = document.querySelectorAll(".guess");
    // selectedRow = row[guessCounter];
    // console.log(selectedRow);

    let div = document.querySelectorAll(".letter");
    selectedDiv = div[letterCounter];
    selectedDiv.setAttribute("id", `letter${[letterCounter]}`);

    let p = document.createElement("p");
    p.textContent = clickedLetters[letterCounter];

    // guesses[guessCounter].childNodes[letterCounter].appendChild(p);
    selectedDiv.appendChild(p);
    letterCounter++;
  }
}

function onBackspace() {
  let letterIndex = clickedLetters.length - 1;
  let p = document.querySelector(`#letter${[letterIndex]} p`);
  p.remove();
  clickedLetters.pop();
  letterCounter--;
  console.log(clickedLetters);
}

function onReturn() {
  if (validWords.includes(clickedLetters.join("")) == false) {
    console.log("Word is not valid");
  } else {
    checkLetters(chosenWordArr, clickedLetters);
    clickedLetters.length = 0;
    guessCounter++;
  }
}

// originally copied an idea from Geeks from Geeks, adjusted with help from Sean and Robert
function checkLetters(chosenWordArr, clickedLetters) {
  console.log(clickedLetters);
  for (let i = 0; i < clickedLetters.length; i++) {
    if (chosenWordArr.indexOf(clickedLetters[i]) == i) {
      let div = document.getElementById(`letter${i}`);
      div.setAttribute("class", "rightLetter");
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

// keyboard

let keys = document.getElementsByClassName("key");

for (let keyElement of keys) {
  let key = keyElement.textContent;
  keyElement.addEventListener("click", function () {
    console.log(key);
    if (clickedLetters.length < 5) {
      clickedLetters.push(key);
      onKeyInput();
    }
  });
}

onStartUp();

function info() {
  alert(
    "What the different colours mean: X - correct letter in the wrong place. Y - correct letter & correct place"
  );
}

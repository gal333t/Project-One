const chosenWord = validWords[Math.floor(Math.random() * validWords.length)];

// can't remember how Michael explained to do this so trying a different method
let letterCounter = 0;
let guessCounter = 0;

let letters = [];
// let letters = [div.letter, div.letter, div.letter, div.letter, div.letter];
let guesses = [];
// let guesses = [div.guess, div.guess, div.guess, div.guess, div.guess];

let clickedLetter = [];

function onStartUp() {
  guesses = document.querySelectorAll(".guess");
  console.log(guesses);
}

function newGuess() {
  letters = guesses[guessCounter].querySelectorAll(".letter");
  // shows us by each box specifically of the first row
  console.log(letters);
  let i = letters;
  for (i = 0; i < 5; i++) {
    // console.log(i);
    let p = document.createElement("p");
    // add a ID with the name "letter" followed by the index for number
    p.setAttribute("id", `letter${[i]}`);
    p.textContent = clickedLetter[i];
    console.log(clickedLetter[i]);
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
    // take the key clicked, and type into a box
    console.log(key);
    // whatever key is clicked, add to array 'clickedLetter'
    clickedLetter.push(key);
    newGuess();
  });
}

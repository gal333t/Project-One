//

const chosenWord = validWords[Math.floor(Math.random() * validWords.length)];

// can't remember how Michael explained to do this so trying a different method
let letterCounter = 0;
let guessCounter = 0;

let letters = [];
// let letters = [div.letter, div.letter, div.letter, div.letter, div.letter];
let guesses = [];
// let guesses = [div.guess, div.guess, div.guess, div.guess, div.guess];

// let letters = guesses? and assing ID based on `lettter${index?}`

function onStartUp() {
  guesses = document.querySelectorAll(".guess");
  console.log(guesses);
  let i = guesses;
  // for (i = 0; i < 6; i++) {
  //   //
  // }
  newGuess();
}

function newGuess() {
  letters = guesses[guessCounter].querySelectorAll(".letter");
  // shows us by each box specifically of the first row
  console.log(letters);
  let i = letters;
  for (i = 0; i < 6; i++) {
    console.log(i);
    let p = document.createElement("p");
    // add a ID with the name "letter" followed by the index for number
    p.setAttribute("id", `letter${[i]}`);
    // this will change the text in each p element to the 'letter' based on index
    p.textContent = letters[i];

    let div = letters[i];
    div.appendChild(p);
  }
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

    if (key === "Backspace") {
      let output = document.querySelectorAll("p");
      output.textContent = "";
    } else {
      let div = document.querySelector(".letter");
      let letter0 = document.createElement("p");
      letter0.textContent = key;
      div.appendChild(letter0);
    }
  });
}

const chosenWord = validWords[Math.floor(Math.random() * validWords.length)];
let chosenWordArr = chosenWord.split("");

let letterCounter = 0;
let guessCounter = 0;

let letters = [];
let guesses = [];

let gameOver = false;

let clickedLetters = [];

function intialize() {
  guesses = document.querySelectorAll(".guess");

  document.addEventListener("keyup", (e) => {
    if (gameOver == true) {
      return;
    } else if ("KeyA" <= e.code && e.code <= "KeyZ") {
      if (clickedLetters.length < 5) {
        clickedLetters.push(e.code[3]);
        onKeyInput();
      }
    } else if (e.code == "Enter") {
      onReturn();
    } else if (e.code == "Backspace") {
      onBackspace();
    }
  });
}
intialize();

let keys = document.getElementsByClassName("key");

for (let keyElement of keys) {
  let key = keyElement.textContent;
  keyElement.addEventListener("click", function () {
    if (clickedLetters.length < 5) {
      clickedLetters.push(key);
      onKeyInput();
    }
  });
}

function onKeyInput() {
  letters = guesses[guessCounter].querySelectorAll(".letter");
  if (letterCounter.length > 4) {
    alert("invalid word");
  } else if (gameOver == true) {
    return;
  } else {
    let div = document.querySelectorAll(".letter");
    selectedDiv = div[letterCounter];
    selectedDiv.setAttribute("id", `letter${[letterCounter]}`);
    let p = document.createElement("p");
    p.textContent = clickedLetters[letterCounter];
    selectedDiv.appendChild(p);
    letterCounter++;
  }
}

function onBackspace() {
  if (gameOver == true) {
    return;
  } else {
    let letterIndex = clickedLetters.length - 1;
    let p = document.querySelector(`#letter${[letterIndex]} p`);
    p.remove();
    clickedLetters.pop();
    letterCounter--;
  }
}

function onReturn() {
  if (validWords.includes(clickedLetters.join("")) == false) {
    if (gameOver == true) {
      return;
    } else {
      alert("Word is not valid");
    }
  } else if (guessCounter == 5 && chosenWord !== clickedLetters.join("")) {
    clickedLetters.length = 0;
    letterCounter = 0;
    let header = document.querySelector("h1");
    let h2 = document.createElement("h2");
    h2.setAttribute("class", "heading");
    h2.textContent = "Sorry you lost.. the correct word was: " + chosenWord;
    header.appendChild(h2);
    gameOver = true;
    return;
  } else {
    checkLetters(chosenWordArr, clickedLetters);
    clickedLetters.length = 0;
    letterCounter = 0;
    guessCounter++;
  }
}

function checkLetters(chosenWordArr, clickedLetters) {
  for (let i = 0; i < clickedLetters.length; i++) {
    if (chosenWord === clickedLetters.join("")) {
      rightWord();
    } else if (chosenWordArr[i] === clickedLetters[i]) {
      let div = document.getElementById(`letter${i}`);
      div.setAttribute("class", "rightLetter");
      div.removeAttribute("id", `letter${[i]}`);
      keyColorChange(clickedLetters[i], div);
    } else if (chosenWordArr.indexOf(clickedLetters[i]) >= 0) {
      let div = document.getElementById(`letter${i}`);
      div.setAttribute("class", "wrongPlace");
      div.removeAttribute("id", `letter${[i]}`);
      keyColorChange(clickedLetters[i], div);
    } else {
      let div = document.getElementById(`letter${i}`);
      div.setAttribute("class", "wrongLetter");
      div.removeAttribute("id", `letter${[i]}`);
      keyColorChange(clickedLetters[i], div);
    }
  }
}

function keyColorChange(key, div) {
  let keyToChange = document.getElementById(key);
  if (div.classList.contains("wrongLetter")) {
    keyToChange.classList.add("keyNotInWord");
  } else if (div.classList.contains("wrongPlace")) {
    keyToChange.classList.add("keyWrongPlace");
  } else {
    keyToChange.classList.add("keyRightLetter");
  }
}

function rightWord() {
  for (let i = 0; i < clickedLetters.length; i++) {
    let div = document.getElementById(`letter${i}`);
    div.setAttribute("class", "rightLetter");
    div.removeAttribute("id", `letter${[i]}`);
  }
  let header = document.querySelector("h1");
  let h2 = document.createElement("h2");
  h2.setAttribute("class", "heading");
  let guessAnswer = guessCounter + 1;
  let options = Math.floor(Math.random() * 4);
  if (options === 0) {
    h2.textContent = "CONGRATS! YOU WIN! " + guessAnswer + "/6, not bad 🎉";
  } else if (options === 1) {
    h2.textContent =
      "CONGRATS! YOU WIN! 🎉 " + guessAnswer + "/6, could be better though";
  } else if (options === 2) {
    h2.textContent =
      "CONGRATS! YOU WIN! " + guessAnswer + "/6, pretty good stuff 🎉";
  } else {
    h2.textContent =
      "CONGRATS, YOU WIN! 🎉 " + guessAnswer + "/6, unreal you legend!";
  }
  header.appendChild(h2);
  return;
}

function info() {
  alert(
    "GREEN - correct letter & correct place. YELLOW - correct letter, wrong place"
  );
}

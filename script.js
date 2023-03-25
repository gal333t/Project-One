//

const chosenWord = validWords[Math.floor(Math.random() * validWords.length)];

let firstWord = prompt("Pick a five letter word");

function firstArray() {
  if (firstWord.length == 5) {
    let firstArray = firstWord.split("");
    // now each letter sits in it's own array
    console.log(firstArray);

    let letter0 = document.createElement("p");
    let div = document.querySelector("#zerozero");
    letter0.textContent = firstArray[0];
    div.appendChild(letter0);
  } else {
    alert("Invalid word");
  }
}

firstArray();

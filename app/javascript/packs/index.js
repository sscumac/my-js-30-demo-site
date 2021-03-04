

const searchInput = document.querySelector(".search-field");
const grid = document.querySelector(".cards-container");
const cards = document.querySelectorAll(".card-link");
const whiteSpace = document.getElementById("white-space");
const infoIconField = document.querySelector(".icon-container");
const infoText = document.querySelector("#info-box .text");
const infoBox = document.getElementById("info-box");
const infoClose = document.getElementById("close");
const infoIcon = document.getElementById("info");

// extend grid dynamically
function extendGrid() {
  const columnsCount = window.getComputedStyle(grid).gridTemplateColumns.split(" ").length;
  const cardsCount = cards.length;
  const rowsCount = Math.ceil(cardsCount / columnsCount);
  whiteSpace.style.gridRowEnd = rowsCount + 2;
}



// function to display results

function displaySearchResults() {
  const search = this.value;
  // const cards = document.querySelectorAll(".card-link");
  const cardsArr = Array.from(cards);
  // console.log(findMatch(search, cardsArr));
  const matchingCards = findMatch(search, cardsArr);
  // console.log(matchingCards);
  //loop over cards
    cards.forEach((card) => {
      card.style.display = 'none'; // add display: none to card
      // loop over matching cards
      matchingCards.forEach((matchCard) => {
        // check if card equals one matching card
        // if yes remove display: none
        if (card === matchCard) card.style.display = "block";
      })

    })
  extendGrid();
}

// function to find search matches

function findMatch(search, cards) {
  return cards.filter((card) => {
    const name = card.innerText;
    const regex = new RegExp(search, "gi"); // create regex with: g(global = check the entire string), i(insensitive);
    return name.match(regex);
  })
};

// functions for footer

function showInfoBox() {
  infoBox.classList.add("show-info-box");
  grid.style.opacity = 0.1;
  infoText.style.opacity = 1;
  infoClose.classList.remove("hide");
  infoIcon.classList.add("hide");
  infoIconField.addEventListener('click', hideInfoBox);
}

function hideInfoBox() {
  infoIconField.removeEventListener('click', hideInfoBox);
  grid.style.opacity = 1;
  infoText.style.opacity = 0;
  infoBox.classList.remove("show-info-box");
  infoClose.classList.add("hide");
  infoIcon.classList.remove("hide");
}


extendGrid();

// event listeners

searchInput.addEventListener("keyup", displaySearchResults);

window.addEventListener('resize', extendGrid);

infoIconField.addEventListener('click', showInfoBox);

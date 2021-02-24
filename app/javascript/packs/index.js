

const searchInput = document.querySelector(".search-field");



// function to display results

function displaySearchResults() {
  const search = this.value;
  const cards = document.querySelectorAll(".card-link");
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
    
  // matchingCards.forEach((card) => {
  //   if (card.name)
  //   (card.innerText);
  // })
}

// function to find search matches

function findMatch(search, cards) {
  return cards.filter((card) => {
    const name = card.innerText;
    const regex = new RegExp(search, "gi"); // create regex with: g(global = check the entire string), i(insensitive);
    return name.match(regex);
  })
};

// console.log(cards);

// cards.forEach((card) => {
//   const name = card.querySelector(".card-name");
//   console.log(name.innerText); 
// });

// event listeners

searchInput.addEventListener("keyup", displaySearchResults);
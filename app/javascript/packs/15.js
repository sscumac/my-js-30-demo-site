// DOM

const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
let items = JSON.parse(localStorage.getItem("items")) || []; // load items from localStore, if this fails it will be an empty array

const clearButton = document.querySelector(".clear");
const checkAll = document.querySelector(".check");
const uncheckAll = document.querySelector(".uncheck");

// functions

function addItem(e) {
  e.preventDefault(); // default behaviour reload page
  const text = this.querySelector('input[name="item"]').value; // [] selects the attributes of the html tag
  const item = {
    text, // short cut for "text: text,
    done: false
  };

  items.push(item);
  console.log(items);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items)); // localStorage updated every single time, parameters must be strings
  this.reset(); // reset is a form method and resets the form
}

function populateList(plates = [], list) {  // plates per default empty so js wouldnt break when nothing is passed
  if (typeof plates === "undefined") {
    list.innerHTML = "";
  } else {
    list.innerHTML = plates.map((plate, index) => {
      return `
        <li>
          <input type="checkbox" data-index="${index}" id="item${index}" ${plate.done ? 'checked' : ''} />
          <label for="item${index}">${plate.text}</label>
        </li>
      `;
    }).join("");
  }
}

function toggleDone(e) {
  if (!e.target.matches("input")) return; // skip unless it is an input, event delegation for future checkboxes
  console.log(e.target);
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
}

function clearAll() {
  localStorage.clear();
  items = [];
  populateList(items, itemsList);
}

function toggleAll(event, check) {
  items.forEach(item => {
    (check === "check") ? item.done = true : item.done = false;
  });
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

// event  listeners

addItems.addEventListener("submit", addItem);

itemsList.addEventListener("click", toggleDone);

clearButton.addEventListener("click", clearAll);

checkAll.addEventListener("click", (event) => toggleAll(event, "check"));
uncheckAll.addEventListener("click", (event) => toggleAll(event, "uncheck"));

populateList(items, itemsList); // on page load

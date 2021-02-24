// DOM elements

// select all checkboxes
const checklist = document.querySelector(".inbox");
const checkboxes = document.querySelectorAll("input");

const clickArray = [...Array(2)];

// -- functions --

// check the boxes inbetween
function checkTheBoxes(checkboxes, index1, index2) {
  let index = 1;
  checkboxes.forEach((check) => {
    if (index2 > index1) {
      if (index >= index1 && index <= index2) check.checked = true;
    } else {
      if (index >= index2 && index <= index1) check.checked = true;
    }
    index++;
  });
};

// get the last click position and write it into array
function getClickPositions(eve) {
  let index = 1;
  checkboxes.forEach((check) => {
    if (eve.target === check) clickIndex(index);
    index++;
  });
  if (eve.shiftKey) checkTheBoxes(checkboxes, clickArray[0], clickArray[1]);
};

// write the array
function clickIndex(index) {
  clickArray.push(index);
  clickArray.shift();
}

// eventlistener
checkboxes.forEach((check) => {
  check.addEventListener("click", getClickPositions);
});



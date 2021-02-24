// DOM elements

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked; // variable to store the last checked element

// functions

function eventHandler(eve) {

  let inBetween = false;
  // check if shiftkey is pressed and if box is checked
  if (eve.shiftKey && this.checked) {
    // loop over the each checkbox again
    checkboxes.forEach((check) => {
      console.log(check);
      if (check === this || check === lastChecked) { // if the one we are looping over is the last one or the current checked
        inBetween = !inBetween; // turn on inBetween flag
        console.log("starting to check");
      }
      if (inBetween) check.checked = true;
    });
  }
  lastChecked = eve.target;
}

// eventListener

checkboxes.forEach((check) => {
  check.addEventListener("click", eventHandler);
})


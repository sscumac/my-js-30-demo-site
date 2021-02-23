// DOM

const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

// functions

// function to set start degrees for hands based on current date
function setStartDegrees(unit) {
  const now = new Date();
  const sec = now.getSeconds();
  const min = now.getMinutes();
  if (unit === "sec") {
    // time = now.getSeconds();
    return (sec * (360 / 60) + 97);
  } else if (unit === "min") {
    // time = now.getMinutes();
    return (min * (360 / 60) + 90 + (sec/ 60) * 6); // 6 = degrees per minute
  } else if (unit === "hour") {
    time = now.getHours();
    return (time * (360 / 12) + 90 + ((min / 60) * 30)); // 30 = degrees per hour
  }
}

let secDegrees = setStartDegrees("sec");
let minDegrees = setStartDegrees("min");
let hourDegrees = setStartDegrees("hour");

// function to add degrees per time
function setDate() {
  // time now
  const now = new Date();
  const sec = now.getSeconds();
  const min = now.getMinutes();
  
  secondHand.style.transform = `rotate(${secDegrees}deg)`;
  secDegrees += (360 / 60);

  minuteHand.style.transform = `rotate(${minDegrees}deg)`;
  minDegrees += (sec)/360;

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  hourDegrees += min/360;

  if (sec=== 0) {
    document.querySelector(".clock").style.border = '20px solid black';
  } else {
    document.querySelector(".clock").style.border = '20px solid white';
  }
  
  

  console.log(sec);
  console.log(secDegrees);
}

setInterval(setDate, 1000); // function needs to run every second
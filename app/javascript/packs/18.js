// dom

const videos = document.querySelectorAll("li");
const showTime = document.getElementById("showTotal");
const totalField = document.querySelector(".total");

// filling the times into list items

videos.forEach((video) => {
  const time = document.createElement('p');
  time.innerHTML = `${video.dataset.time}`;
  if(video.className !== "total") video.appendChild(time);
})

// calculate the time

function calcTime() {
  const timeNodes = Array.from(document.querySelectorAll("[data-time]"));  // create array from all time datasets

  const seconds = timeNodes

    .map(node => node.dataset.time)
    .map(time => time.split(":"))
    .map(timeArr => {
      const min = parseFloat(timeArr[0]);
      const sec = parseFloat(timeArr[1]);
      return ((min * 60) + sec);
    })
    .reduce((acc, current) => acc + current);
  
  const totalTime = new Date(seconds * 1000).toISOString().substr(11, 8);
  const totalTimeDisplay = document.createElement('p')
  totalTimeDisplay.className = 'total-time';
  totalTimeDisplay.innerHTML = totalTime;
  totalField.appendChild(totalTimeDisplay);
}



// listeners

showTime.addEventListener("click", calcTime);



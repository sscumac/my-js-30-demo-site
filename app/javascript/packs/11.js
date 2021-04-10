// DOM

const sliderImages = document.querySelectorAll(".slide-in");
const text = document.querySelector(".site-wrap");

const shownImages = document.getElementsByClassName("active");


// functions

function debounce(func, wait = 20, immediate = true) {  // blocks a function for given time in ms (from the internet)
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function whiteText() {
  setTimeout(() => {
    text.classList.add("white");
  }, 400);
  setTimeout(() => {
    text.classList.remove("white");
  }, 800);
}




function slideIn() {
  sliderImages.forEach((slideImage) => {
    const slideInAt = (window.innerHeight + window.scrollY) - (slideImage.height / 2);
    const imageBottom = slideImage.offsetTop + slideImage.height;
    const isHalfShown = slideInAt > slideImage.offsetTop; // you'll get a boolean 
    const isScrolledOver = imageBottom < window.scrollY;

    let shownImagesScore = shownImages.length;

    if (isHalfShown && !isScrolledOver) {
      slideImage.classList.add("active");
      if (shownImagesScore != shownImages.length) whiteText();
    } else {
      slideImage.classList.remove("active");
    }
  });
}

// listeners

window.addEventListener("scroll", debounce(slideIn));



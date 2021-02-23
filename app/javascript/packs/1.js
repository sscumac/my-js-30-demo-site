
  // select in DOM

  const keyboard = document.querySelectorAll(".key");

  // functions to manipulate DOM
    function play(event) {
    // console.log(event.keyCode);
    let key;
      if (event.keyCode) {
    key = document.querySelector(`div[data-key="${event.keyCode}"]`);
      } else {
    key = event.currentTarget;
      }
      if (!key) return;
      const audio = document.querySelector(`audio[data-key="${key.dataset.key}"]`);
      key.classList.add("playing");

      audio.currentTime = 0; // rewind to the start
      audio.play();
    }

    function removeAnimation(event) {
      const key = event.currentTarget;
      key.classList.remove("playing");
    }

    // add eventlisteners
    keyboard.forEach((key) => {
    key.addEventListener("click", play);
      key.addEventListener("transitionend", removeAnimation);
    });
    window.addEventListener("keydown", play);

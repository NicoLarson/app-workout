document.addEventListener("DOMContentLoaded", () => {
  
  const title = document.querySelector("main section h2");
  const chronoHours = document.querySelector(
    "main section ul.time-list li:nth-child(1)"
  )
  const chronoMinutes = document.querySelector(
    "main section ul.time-list li:nth-child(2)"
  )
  const chronoSeconds = document.querySelector(
    "main section ul.time-list li:nth-child(3)"
  )
  const startButton = document.querySelector(
    "main section ul.button-list li:nth-child(1)"
  )
  const stopButton = document.querySelector(
    "main section ul.button-list li:nth-child(2)"
  )
  const resetButton = document.querySelector(
    "main section ul.button-list li:nth-child(3)"
  )
  let seconds = 0
  let minutes = 0
  let hours = 0
  let stopWatch

  title.innerHTML = "Chronometer"

  let chronometer = () => setInterval(() => {
    if (seconds < 9 && seconds < 59) {
      seconds++;
      chronoSeconds.innerHTML = ":0" + seconds;
    } else if (seconds >= 9 && seconds < 59) {
      seconds++;
      chronoSeconds.innerHTML = ":" + seconds;
    } else if (seconds > 58) {
      seconds = 0;
      chronoSeconds.innerHTML = ":" + seconds;
      if (minutes < 9) {
        minutes++;
        chronoMinutes.innerHTML = ":0" + minutes;
      } else if (minutes >= 9 && minutes < 59) {
        minutes++;
        chronoMinutes.innerHTML = ":" + minutes;
      } else if (minutes > 58) {
        minutes = 0;
        chronoMinutes.innerHTML = ":" + minutes;
        if (hours < 9) {
          hours++;
          chronoHours.innerHTML = "0" + hours;
        } else if (hours >= 9 && hours < 59) {
          hours++;
          chronoHours.innerHTML = hours;
        } else if (hours > 58) {
          hours = 0;
          chronoHours.innerHTML = hours;
        }
      }
    } else if (hours > 58 && minutes > 58 && seconds > 58) {
      initChronometer()
    }
  }, 10);



  let initChronometer = () => {
    seconds = 0;
    minutes = 0;
    hours = 0;
    chronoHours.innerHTML = "0" + hours;
    chronoMinutes.innerHTML = ":0" + minutes;
    chronoSeconds.innerHTML = ":0" + seconds;
  };


  startButton.addEventListener("click", () => {
    clearInterval(stopWatch)
    stopWatch = chronometer()
  })

  stopButton.addEventListener("click", () => {
    clearInterval(stopWatch)
  });

  resetButton.addEventListener("click", () => {
    clearInterval(stopWatch)
    initChronometer()
  });
});

window.onload = () => {
    document.querySelector("#start").onclick = startCountdown;
    document.querySelector("#reset").onclick = reset;
  };
  
  let interval;
  
  let startCountdown = () => {
    const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value;
  
    const stop = document.querySelector("#stop");
  
    const endTime = new Date(date + " " + time);
  
    interval = setInterval(() => calculateTime(endTime), 1000);
  
    stop.addEventListener("click", stopCountdown);
  };
  
  let calculateTime = (endTime) => {
    const currentTime = new Date();
  
    const days = document.querySelector("#countdownDays");
    const hours = document.querySelector("#countdownHours");
    const minutes = document.querySelector("#countdownMinutes");
    const seconds = document.querySelector("#countdownSeconds");
  
    if (endTime > currentTime) {
      const timeLeft = Math.max(0, (endTime - currentTime) / 1000);
  
      const remainingDays = Math.floor(timeLeft / (24 * 3600));
      const remainingHours = Math.floor((timeLeft % (24 * 3600)) / 3600);
      const remainingMinutes = Math.floor((timeLeft % 3600) / 60);
      const remainingSeconds = Math.floor(timeLeft % 60);
  
      days.innerHTML = remainingDays;
      hours.innerHTML = remainingHours;
      minutes.innerHTML = remainingMinutes;
      seconds.innerHTML = remainingSeconds;
    } else {
      stopCountdown();
    }
  };
  
  let reset = () => {
    clearInterval(interval);
    document.querySelector("#countdownDays").innerText = 0;
    document.querySelector("#countdownHours").innerText = 0;
    document.querySelector("#countdownMinutes").innerText = 0;
    document.querySelector("#countdownSeconds").innerText = 0;
  };
  
  let stopCountdown = () => {
    clearInterval(interval);
  };
  
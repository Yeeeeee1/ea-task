const tablets = [...document.querySelectorAll(".tablet")];
const searchBtn = document.querySelector(".arrow-btn");
const overlay = document.querySelector(".overlay");
const popup = document.querySelector(".popup");
const closeBtn = document.getElementById("closeBtn");
const closeCross = document.getElementById("closeCross");

closeBtn.addEventListener("click", closePopup);
closeCross.addEventListener("click", closePopup);

searchBtn.addEventListener("click", openPopup);

function openPopup() {
  overlay.style.display = "block";
  popup.style.display = "flex";
}

function closePopup() {
  overlay.style.display = "none";
  popup.style.display = "none";
}

const date = "2023-07-24";

setInterval(setTimer, 1000);

function setTimer() {
  let newDate = new Date(date);
  let nowDate = new Date();
  let time = newDate - nowDate;
  outputTimer(convertMiliseconds(time));
}

function outputTimer(timeArr) {
  for (let i = 0; i < tablets.length; i++) {
    tablets[i].innerHTML = timeArr[i];
  }
}

function convertMiliseconds(miliseconds) {
  let days, hours, minutes, seconds, totalHours, totalMinutes, totalSeconds;

  totalSeconds = parseInt(Math.floor(miliseconds / 1000));
  totalMinutes = parseInt(Math.floor(totalSeconds / 60));
  totalHours = parseInt(Math.floor(totalMinutes / 60));
  days = parseInt(Math.floor(totalHours / 24));

  seconds = parseInt(totalSeconds % 60);
  minutes = parseInt(totalMinutes % 60);
  hours = parseInt(totalHours % 24);

  return [days, hours, minutes, seconds];
}

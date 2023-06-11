const tablets = [...document.querySelectorAll(".tablet")];
const overlay = document.querySelector(".overlay");
const popup = document.querySelector(".popup");
const popup2 = document.querySelector(".popup2");
const closeBtn = document.getElementById("closeBtn");
const closeCross = document.getElementById("closeCross");
const closeErrorBtn = document.getElementById("closeErrorBtn");
const closeErrorCross = document.getElementById("closeErrorCross");
const subBtn = document.querySelector(".arrow-btn");
const notify = document.querySelector(".notify");
const triggers = [...document.querySelectorAll(".trigger")];

notify.addEventListener("input", removeError);

closeBtn.addEventListener("click", closePopup);
closeCross.addEventListener("click", closePopup);

closeErrorBtn.addEventListener("click", closeErrorPopup);
closeErrorCross.addEventListener("click", closeErrorPopup);

subBtn.addEventListener("click", openPopup);

function removeError() {
  notify.classList.remove("error");
}

function openPopup() {
  if (notify.value === "") {
    notify.classList.add("error");
    return;
  }
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(notify.value)) {
    overlay.style.display = "block";
    popup2.style.display = "flex";
    return;
  }

  overlay.style.display = "block";
  popup.style.display = "flex";
}

function closePopup() {
  setTimeout(function () {
    overlay.style.display = "none";
    popup.style.display = "none";
    popup.classList.remove("popupExit");
  }, 400);

  popup.classList.add("popupExit");
}

function closeErrorPopup() {
  setTimeout(function () {
    overlay.style.display = "none";
    popup2.style.display = "none";
    popup.classList.remove("popupExit");
  }, 400);

  popup2.classList.add("popupExit");
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

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  return [days, hours, minutes, seconds];
}

for (let i = 0; i < triggers.length; i++) {
  triggers[
    i
  ].style.backgroundImage = `linear-gradient(180deg, rgba(22, 44, 78, 0) 0%, #162c4e 100%), url('img/accord${
    i + 1
  }.png')`;
}

$(".item").first().addClass("active");
let activeItem = $(".item").first().filter(".active");
let content = $(".item").first().find(".content");
let activeContent = activeItem.find(".content");
activeContent.animate({
  width: "0px",
});
content.animate({
  width: "995px",
});

$(function () {
  $(".trigger").on("click", function (e) {
    e.preventDefault();
    let $this = $(this),
      container = $this.closest(".menu"),
      item = $this.closest(".item"),
      items = container.find(".item"),
      activeItem = items.filter(".active"),
      content = item.find(".content"),
      activeContent = activeItem.find(".content");

    if (!item.hasClass("active")) {
      items.removeClass("active");
      item.addClass("active");
      activeContent.animate({
        width: "0px",
      });
      content.animate({
        width: "995px",
      });
    } else {
      item.removeClass("active");
      content.animate({
        width: "0px",
      });
    }
  });
});

"use strict";

let remainingTime = document.querySelector(".js-remaining-time");
let decrease = document.querySelector(".js-btn-decrease");
let increase = document.querySelector(".js-btn-increase");
let start = document.querySelector(".js-btn-start");
let ring = document.querySelector(".js-btn-ring");
let time = 10;
let outTime = Number(remainingTime.textContent) * 1000;
let shake = document.querySelector(".alarm");
remainingTime.textContent = time + " sec.";



function timeDecrease() {
    if (time > 0) {
       time -=1;
       remainingTime.textContent = time + " sec.";
    }
}

function timeIncrease() {
    if (time >= 0) {
        time += 1
        remainingTime.textContent = time + " sec.";
    }
}

function stopShaking() {
    shake.classList.remove("alarm-shaking");
}

function sonnerie() {
    let audioObj = new Audio("https://cdn.glitch.com/125a1df2-e0c0-42fc-9a9e-83a539ae87f0%2F219244__zyrytsounds__alarm-clock-short.wav?v=1602505754161");
    audioObj.play();
    let shaking = shake.classList.add("alarm-shaking");
    setInterval(stopShaking, 8500);
}

function timeStart() {
      setInterval(timeDecrease, 1000);
      setTimeout(sonnerie, outTime);
  }








decrease.addEventListener("click", timeDecrease);
increase.addEventListener("click", timeIncrease);
ring.addEventListener("click", sonnerie);
start.addEventListener("click", timeStart);
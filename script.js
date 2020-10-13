"use strict";

let remainingTime = document.querySelector(".js-remaining-time");
let decrease = document.querySelector(".js-btn-decrease");
let increase = document.querySelector(".js-btn-increase");
let start = document.querySelector(".js-btn-start");
let ring = document.querySelector(".js-btn-ring");
let clickCount = 0;
let time = 10;
let singleClickTimer
let clear
let falseShaking = new Boolean(false);
let shake = document.querySelector(".alarm");
remainingTime.textContent = time + " sec.";



function timeDecrease() {
    if (time > 0) {
       time -=1;
       remainingTime.textContent = time + " sec.";
    }
}

function dblDecrease() {
    if (time >= 10) {
        time -=10;
        remainingTime.textContent = time + " sec.";
    }
}

function timeIncrease() {
    if (time >= 0) {
        time += 1
        remainingTime.textContent = time + " sec.";
    }
}

function dblIncrease() {
    if (time >= 0) {
        time +=10;
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
    setTimeout(stopShaking, 8500);
}

function timeStart() {
    clear = setInterval(check, 1000);
}

function check() {
    if ( time >= 2) {
       time -= 1;
       remainingTime.textContent = time + " sec.";
     } else {
        time -= 1;
        remainingTime.textContent = time + " sec.";
        sonnerie();
        clearInterval(clear);
     }
}





decrease.addEventListener("click", function() {
    clickCount++;
    if(clickCount === 1) {
         singleClickTimer = setTimeout(function() {
            clickCount = 0;
            timeDecrease();
        }, 200);
        } else if (clickCount === 2) {
            clearTimeout(singleClickTimer);
            clickCount = 0;
            dblDecrease();
        }
    });

increase.addEventListener("click", function() {
    clickCount++;
    if(clickCount === 1) {
         singleClickTimer = setTimeout(function() {
            clickCount = 0;
            timeIncrease();
        }, 200);
        } else if (clickCount === 2) {
            clearTimeout(singleClickTimer);
            clickCount = 0;
            dblIncrease();
        }
    });


ring.addEventListener("click", sonnerie);
start.addEventListener("click", timeStart);
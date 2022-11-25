"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
const message = document.querySelector(".message").textContent;
const number = document.querySelector(".number").textContent;
let score = 20;
let highscore = 0;

document.querySelector(".number").textContent = secretNumber;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // when theres no input
  if (!guess) {
    displayMessage("No number");
  }
  //when player wins
  else if (secretNumber === guess) {
    displayMessage("🎉 correct number");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  // when guess is wrong
  else if (secretNumber !== guess) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "😢Too high" : "😢Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("😲 Game Over");
      document.querySelector(".score").textContent = 0;
    }
  }
  // // when guess is too high!
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "😢Too high";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "😲 Game Over";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
  // // when guess is too Low!
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "😢Too Low";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "😲 Game Over";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});
document.querySelector(".again").addEventListener("click", function () {
  displayMessage(message);
  document.querySelector(".number").textContent = number;
  document.querySelector(".score").textContent = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
});

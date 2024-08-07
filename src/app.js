/* eslint-disable */
import "bootstrap";
import "./style.css";
let cartas = ["♥", "♦", "♣", "♠"];
let number = ["A", 2, 3, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
let numberCard = document.querySelector(".number");
let button = document.querySelector("button");
let dostipos = document.querySelectorAll(".typeCard");
//Using foreach
function randomGenerator(arr) {
  let random = Math.floor(arr.length * Math.random());
  return arr[random];
}
function randomCard() {
  let randomCard = randomGenerator(cartas);
  for (let i = 0; i < dostipos.length; i++) {
    if (randomCard == "♦" || randomCard == "♥") {
      dostipos[i].classList.add("red");
      dostipos[i].classList.remove("black");
    } else {
      dostipos[i].classList.remove("red");
      dostipos[i].classList.add("black");
    }
  }
  dostipos.forEach(item => {
    item.textContent = randomCard;
  });
  numberCard.textContent = randomGenerator(number);
}
randomCard();
button.addEventListener("click", () => {
  randomCard();
});

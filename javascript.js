var name1 = prompt("What is your name?");
var name2 = prompt("What is the second name?");
alert("Welcome " + name1 + " and " + name2 + ". After you click on the OK button below, the dices will be rolled randomly. You can refresh the page to roll again.");

var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
console.log(randomNumber1);


var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
console.log(randomNumber2);

var dice1 = document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
var dice2 = document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + randomNumber2 + ".png");

var playerOneName = document.querySelectorAll("p")[0].innerHTML = name1;
var playerTwoName = document.querySelectorAll("p")[1].innerHTML = name2;

function resultMessage() {
  if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
  } else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = name1 + " won!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = name2 + " won!";
  }
}

console.log(resultMessage());

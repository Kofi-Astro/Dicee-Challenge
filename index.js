var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;



function randomizeDice(number, diceNum) {
	var image = document.querySelectorAll("img")[diceNum].setAttribute("src", "images/dice" + number + ".png");


	// if (number === 1) {
	// 	image
	// } else if (number === 2) {
	// 	document.querySelectorAll("img")[diceNum].setAttribute("src", "images/dice2.png")
	// } else if (number === 3) {
	// 	document.querySelectorAll("img")[diceNum].setAttribute("src", "images/dice3.png")
	// } else if (number === 4) {
	// 	document.querySelectorAll("img")[diceNum].setAttribute("src", "images/dice4.png")
	// } else if (number === 5) {
	// 	document.querySelectorAll("img")[diceNum].setAttribute("src", "images/dice5.png")
	// } else {
	// 	document.querySelectorAll("img")[diceNum].setAttribute("src", "images/dice6.png")
	// }
}


dice1 = randomizeDice(randomNumber1, 0);
dice2 = randomizeDice(randomNumber2, 1);

if (randomNumber1 > randomNumber2) {
	document.querySelector("h1").textContent = "Player 1 wins";
} else {
	document.querySelector("h1").innerHTML = "Player 2 wins";
}
var cardOne = "Queen";
var cardTwo = "Queen";
var cardThree = "King";
var cardFour = "King";

if (cardTwo === cardFour){
	alert ("try again");
}
else if (cardTwo === cardThree){
	alert ("try again");
}
else if (cardOne === cardThree){
	alert ("try again");
}
else if (cardOne === cardFour){
	alert ("try again");
}
else if (cardTwo === cardOne){
	alert ("found a match!");
}
else if (cardThree === cardFour){
	alert ("found a match");
}
else {
	alert ("try again");
}

var cardNumber = document.getElementById('game-board');
for (var i = 0; i < cardNumber.length; i++){
	cardNumber[i].className = 'cardOne';
}
for (var i = 0; i < cardNumber.length; i++){
	cardNumber[i].className = 'cardTwo';
}
for (var i = 0; i < cardNumber.length; i++){
	cardNumber[i].className = 'cardThree';
}
for (var i = 0; i < cardNumber.length; i++){
	cardNumber[i].className = 'cardFour';
}

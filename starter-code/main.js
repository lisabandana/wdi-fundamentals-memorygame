var cardOne = "Queen";
var cardTwo = "Queen";
var cardThree = "King";
var cardFour = "Queen";

// if (cardTwo === cardFour){
// 	alert ("try again");
// } else if (cardTwo === cardThree){
// 	alert ("try again");
// } else if (cardOne === cardThree){
// 	alert ("try again");
// } else if (cardOne === cardFour){
// 	alert ("try again");
// } else if (cardTwo === cardOne){
// 	alert ("found a match!");
// } else if (cardThree === cardFour){
// 	alert ("found a match");
// } else {
// 	alert ("try again");
// }


var cardNumber = document.getElementById('game-board');

var createCards = function(maxCards) {
	for (var i = 0; i < maxCards; i++){
		var div = document.createElement('div');
		div.className = 'card';
		cardNumber.appendChild(div);
	}

}

createCards(4);






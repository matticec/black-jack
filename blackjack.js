var suit = ["spades", "diamonds", "clubs", "hearts"];
var value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let gameOver = false
​
function getDeck()
{
	var deck = [];
​
	for(var i = 0; i < suit.length; i++)
	{
		for(var x = 0; x < value.length; x++)
		{
			var card = {value: value[x], suit: suit[i]};
			deck.push(card);
		}
	}
​
	return deck;
}
​
var deck = getDeck()
​
function shuffle(deck)
{
	for (let i = 0; i < 100; i++){
	
		let compCards = Math.floor((Math.random() * deck.length));
		let playCards = Math.floor((Math.random() * deck.length));
		let temp = deck[compCards];
​
		deck[compCards] = deck[playCards];
        deck[playCards] = temp;
       
	}
}
shuffle(deck)
console.log(deck);
​
computer = []
player = []
​
function hand() {
    computer.push(deck.shift());
    player.push(deck.shift());
    computer.push(deck.shift());
    player.push(deck.shift());
    
}
​
function getPoints(cards) {
​
    let pts = 0
​
    cards.forEach(card => {
        if (card.value === "A") {
            pts += 11;
          } else if (card.value === "J" || card.value === "Q" || card.value === "K") {
            pts += 10;
          } else {
            pts += parseInt(card.value);
          }
          
    });
   return pts;
}
hand();
​
 let buttonHit = document.getElementById("hit");
 buttonHit.addEventListener('click', function() {
    if(getPoints(player) >= 21){
      score();
    }
    else{
      player.push(deck.shift());
    }
    
  });
  
  let buttonStay = document.getElementById("stay");
  buttonStay.addEventListener('click', function() {
    gameOver = true;
    checkForEndOfGame();
  });
​
function updateScores() {
    computerpts = getPoints(computer);
    playerpts = getPoints(player);
  }
​
  function checkForEndOfGame() {
    if(getPoints(computer) > 16){
      score();
    }
    else if(getPoints(computer) <= 16){
        computer.push(deck.shift());
    }
    else{
      checkForEndOfGame();
    }
  }
​
​
​
function score(){
    var computerpts = getPoints(computer);
    var playerpts = getPoints(player);
    
    if(computerpts == playerpts && playerpts < 22){
        console.log("It's a tie!");
    }
    else if(computerpts > playerpts || playerpts > 21){
        console.log("Computer wins!");
    }
    else{
      console.log("You win!");
    }
}
checkForEndOfGame()
score();
console.log(getPoints(player), player);
console.log(getPoints(computer), computer);



// random word generator and variables down below
var heroes = [
['S','U','P','E','R','M','A','N'],
['B','A','T','M','A','N'],
['H','U','L','K'] ];
var numberOfGuesses = 10;
var wins = 0;
var losses = 0;
var pressedKeys = [];
var computerGuess = '';

var randomH = Math.floor((Math.random()*(heroes.length)));

var randomHero = heroes[randomH];//variable for the random word

function newRandom(){

	computerGuess = heroes[Math.floor(Math.random() * heroes.length)];
	numberOfGuesses = 10
} for (var i = 0; i < heroes.length; i++) {
		{
			if(heroes[i].indexOf('') != -1)
				alert(heroes[i])
		}

}

newRandom();


document.onkeyup = function runProgram(event){

	
//if user loses all his guesses
	if(numberOfGuesses > 0) {

		var userGuess = event.key;
		heroes.forEach(function(heroes) {
			console.log(heroes);

		})
			//if user guesses right
		if(userGuess === computerGuess){
			wins++;
			
		
			newRandom();
			}

//if user guesses wrong
		if(userGuess !== computerGuess) {
		
			numberOfGuesses--;
		}

		//varibles that hold values and will change the innerHTML on the DOM

		var holder = document.getElementById('user-wins');
		holder.innerHTML = wins;
		holder = document.getElementById('user-losses');
		holder.innerHTML = losses;
		holder = document.getElementById('guesses-left');
		holder.innerHTML = numberOfGuesses;
		holder = document.getElementById('lettersGuessed');
		pressedKeys.push(userGuess);
		holder.innerHTML = pressedKeys;



	} else {

		losses++
		alert("Game Over");
		numberOfGuesses = 10;
		newRandom()
		runProgram();
	}



}
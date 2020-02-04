var playing = false;
var score;
var timeremaning;
var action;
var correctAnswer;
var position;


document.getElementById('startreset').onclick = function(){
	if(playing == true){
		// This is for page reloading 
		location.reload();
	}
	else{
		playing = true;
		// Starting score
		score = 0;
document.getElementById('scoreBox').innerHTML = score;
document.getElementById('timeremaning').style.display = "block";
timeremaning = 60;
document.getElementById("time").innerHTML = timeremaning;
// Hide the popup-box so that we can again start the new game
document.getElementById('gameover').style.display = "none";  

document.getElementById('startreset').innerHTML = "Reset Game";		
startcounter();
generate();
	}
}

// Clicking on the answer

for(i=1;i<5;i++){
	document.getElementById("box"+i).onclick = function(){
	// If playing
if(playing==true){
if(this.innerHTML == correctAnswer){
			score++;
document.getElementById("scoreBox").innerHTML = score;
document.getElementById("correct").style.display = "block";
document.getElementById("wrong").style.display = "none";
setTimeout(function(){
document.getElementById("correct").style.display = "none";
}, 1000);
generate();
      }
      else{
document.getElementById("wrong").style.display = "block";
document.getElementById("correct").style.display = "none";
setTimeout(function(){
document.getElementById("correct").style.display = "none";
}, 1000);
      }
      }
	}



}







function startcounter(){
	action = setInterval(function(){
    timeremaning -= 1;
    document.getElementById("time").innerHTML = timeremaning;
	
	if(timeremaning == 0){
		stopCountDown();
document.getElementById("gameover").style.display = "block";
document.getElementById("gameover").innerHTML = "<p>Game Over</p><p>Your score is " + score + "</p>";
   playing = false;
   // To again start the game
document.getElementById("startreset").innerHTML = "Start Game";
    }
    }, 1000);
};

function stopCountDown(){
	clearInterval(action);
}

function generate(){
	var x = 10 + Math.round(9*Math.random());
	var y = 10 + Math.round(9*Math.random());
    correctAnswer = x*y;
document.getElementById("question").innerHTML = x + "X" + y;
 position = 1 + Math.round(3*Math.random());
// This is for correct answer
document.getElementById("box"+position).innerHTML = correctAnswer;
// This is for wrong anwer
for (var i = 1; i < 5; i++) {
	if(i != position){
	var wrongAnswer;
do{
wrongAnswer = (10 + Math.round(9*Math.random()))*(10 + Math.round(9*Math.random()));
}while(wrongAnswer == correctAnswer)
	document.getElementById("box"+i).innerHTML = wrongAnswer;
}
}
document.getElementById("correct").style.display = "block";
}



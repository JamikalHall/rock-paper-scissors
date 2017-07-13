//One user choice variable in the global scope used later for comparison
var userChoice = "";
var cpuAnswer = "";
var counter = 1;

//event listeners!
// There might be a better way to refactor this, but it works for now.
// In each click function, when the button is clicked, basically that counts
// as a whole game. Because cpuAnswer() isn't run until the setText() function runs,
// it has to be before determineWinner(), otherwise the game will use the previous
// game's variables for comparison.
$(document).ready(function() {

$("#userChoiceRock").click(function(){
  userChoice = "rock";
  setText();
  determineWinner();
  gamesPlayed();
});
$("#userChoicePaper").click(function(){
  userChoice = "paper";
  setText();
  determineWinner();
  gamesPlayed();
});
$("#userChoiceScissors").click(function(){
  userChoice = "scissors";
  setText();
  determineWinner();
  gamesPlayed();
});

//This function sets the html for the game, telling the player who won.
function setText() {
  $('#userText').text("You chose " + userChoice + "...");
  $('#cpuText').text("The computer chose " + getCpuAnswer() + "...");
}

//function to generate computer's answer
function getCpuAnswer(){
  var randomNumber = (Math.floor((Math.random() * 3) + 1));
  if(randomNumber == 1){
    cpuAnswer = "rock";
  }
  else if(randomNumber == 2){
    cpuAnswer = "paper";
  }
  else {
    cpuAnswer = "scissors";
  }
  return cpuAnswer;
}
});

// function to compare userChoice to cpuAnswer.
// If one of the conditions is filled, the computer wins. Otherwise the user wins!
function determineWinner(){
  if(userChoice == cpuAnswer){
    $('#winnerText').text("Tie! Try again!");
  }
  else if(userChoice == "rock" && cpuAnswer == "paper"){
    $('#winnerText').text("The computer wins!");
  }
  else if(userChoice == "paper" && cpuAnswer == "scissors"){
  $('#winnerText').text("The computer wins!");
  }
  else if(userChoice == "scissors" && cpuAnswer == "rock"){
  $('#winnerText').text("The computer wins!");
  }
  else {
  $('#winnerText').text("You win!");
  }
};

function gamesPlayed(){
  $('#gamesPlayed').text("Games Played: " + counter);
  counter++;
}

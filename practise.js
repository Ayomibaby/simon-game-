var buttonColors=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];

var started= false;
var level= 0;



$(document).keypress(function(){
  if (!started){
    $("h1").text("level"+ level);
    nextSequence();
    started=true;
 }
  
});

$(".btn").click(function(){
  var userChosenColor= $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);

  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
  if (gamePattern[currentLevel]===userClickedPattern[currentLevel]) {
  if (userClickedPattern.length===gamePattern.length){
    setTimeout(function(){
      nextSequence()
    },1000);
  }
} else {
   playSound("wrong");
   $("body").addclass("game-over");
   $("h1").text("Game Over, Press Any Key to Restart");
  }
  setTimeout(function(){
    $("body").removeclass("game-over");
  },200);
  startOver();
  }


function nextSequence() {
  userClickedPattern=[];
  level++;
  $("h1").text("level"+level);
  var randomNumber= Math.floor(Math.random()*4);

  var randomChosenNumber=  buttonColors[randomNumber];
gamePattern.push(randomChosenNumber);
$("#"+ randomChosenNumber).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenNumber);
}
function animatePress(currentColor){
  $("#" + currentColor).addclass("pressed");
  setTimeout(function(){
   $("#" + currentColor).removeclass("pressed");
  },100);
}

 function playSound(name){ // plays sound 
  var audio= new Audio ("sounds/"+ randomChosenNumber+ ".mp3");
  audio.play();
 }

 function startOver(){
   level=0;
   gamePattern=[];
   started=false;
 }
 


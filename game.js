var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];

var userClickedPattern = [];

var level = 0;

$(document).one("keydown", function(){
    nextSequence();
});



function nextSequence() {
    userClickedPattern=[];
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    var chosenSound = new Audio("sounds/" + randomChosenColour+ ".mp3");
    chosenSound.play();
    while (level < gamePattern.length){
        level++;
    };
     $("h1").text("Level "+level);
};


$(".btn").on("click",function(){
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer();
   });

function animatePress(userChosenColour){
    $("#"+userChosenColour).addClass("pressed");
    setTimeout(function(){$("#"+userChosenColour).removeClass("pressed")},100);
 };


function playSound(userChosenColour){

 switch (userChosenColour) {
    case "green":
        var green1 = new Audio("sounds/" + userChosenColour+ ".mp3");
        green1.play();
        break;
    case "blue":
        var blue1 = new Audio("sounds/" + userChosenColour+ ".mp3");
        blue1.play();
        break;
    case "yellow":
        var yellow1 = new Audio("sounds/" + userChosenColour+ ".mp3");
        yellow1.play();
        break;
    case "red":
        var red1 = new Audio("sounds/" + userChosenColour+ ".mp3");
        red1.play();
        break;
    default:
        break;
 }
};


function checkAnswer(){


  for (var i = 0; i < userClickedPattern.length; i++) {
    if (gamePattern[i] !== userClickedPattern[i]) {
    var wrong = new Audio ("sounds/wrong.mp3");
    wrong.play();
    $("body").addClass("game-over");
    setTimeout(function(){$("body").removeClass("game-over")},200)
    $("h1").text("Game Over, Press any key to Restart");
    startOver();
    } else if (gamePattern.length === userClickedPattern.length && gamePattern[i] === userClickedPattern[i]){
    setTimeout(function(){nextSequence()},1000);
}}}; 

function startOver(){
    gamePattern = [];
    level = 0;
    $(document).one("keydown", function(){
        nextSequence();
    });

};
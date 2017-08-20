// Timer Countdown variables and functions
var time = 30;
var intervalId;
var timeOut = false;

var timer = function(){
  if (!timeOut){
    intervalId = setInterval(countdown,1000)
  }
}

var countdown = function(){
  time--;
  $("#timer").html("<span class='glyphicon glyphicon-hourglass'></span> Time Remaining: " + time);

  if(time===0){
  	timeOut = true;
  	clearInterval(intervalId);
  	showAnswer();
  }
}

// Counters
var numCorrect = 0;
var numIncorrect = 0;
var unanswered = 0;
var count = 0;
var answer = "";
var imgSrc = "";

// =================================
// Questions for game
var questionArray = [
  {question: "What is the most visited attraction in Paris?",
  choices: ["Eiffel Tower","The Louvre","Notre Dame","Disneyland Paris"],
  correctChoice: "Disneyland Paris",
  image: "assets/images/giphy-disneyland-paris.gif"},

  {question: "French film production is ____ in the world.",
  choices: ["1st","2nd","3rd","4th"],
  correctChoice: "2nd",
  image: "assets/images/giphy-amelie.gif"},
  
  {question: "All of the foods below were NOT invented in France except for:",
  choices: ["French Toast","French Fries","Crêpes","Croissants"],
  correctChoice: "Crêpes",
  image: "assets/images/giphy-crepes.gif"},
  
  {question: "France is about the same size as this state in the US:",
  choices: ["Texas","Arizona","Minnesota","Tennessee"],
  correctChoice: "Texas",
  image: "assets/images/giphy-texas.gif"},

  {question: "French was the official language of this country historically for over 300 years:",
  choices: ["USA","Spain","England","Russia"],
  correctChoice: "England",
  image: "assets/images/giphy-english-flag.gif"},

  {question: "It is illegal to name a pig this name in France:",
  choices: ["Macron","Napoleon","Louis","Marie"],
  correctChoice: "Napoleon",
  image: "assets/images/giphy-napoleonb.gif"},

  {question: "It is illegal to do which of the following activities on railroads in France?",
  choices: ["Kiss","Transact business","Shout","Eat"],
  correctChoice: "Kiss",
  image: "assets/images/giphy-pixar-kiss.gif"},

  {question: "The French invented all of these things EXCEPT for:",
  choices: ["Guillotine","Hot Air Balloon","Metric System","Steam Locomotive"],
  correctChoice: "Steam Locomotive",
  image: "assets/images/giphy-steam-loco.gif"},

  {question: "The Eiffel Tower is painted every ____ years.",
  choices: ["5","7","2","10"],
  correctChoice: "7",
  image: "assets/images/giphy-tour-eiffel.gif"},

  {question: "There is a ________ street in every town in France.",
  choices: ["Victor Hugo","St. Paul","Charles de Gaulle","Main"],
  correctChoice: "Victor Hugo",
  image: "assets/images/giphy-victor-hugo.gif"}
]
// ==================================
// Function called to start off the game

var reset = function(){
numCorrect = 0;
numIncorrect = 0;
unanswered = 0;
count = 0;
answer = "";
imgSrc = "";
timeOut = false;
time = 30;
$("#choices").empty();
$("#timer").html("<span class='glyphicon glyphicon-hourglass'></span> Time Remaining: " + time);
timer();
displayQnA(questionArray[count]);
}

// Function to create radio buttons populated with choices and Submit button

var displayQnA = function(currentQ){
  $("#question").html("<span class='glyphicon glyphicon-circle-arrow-right'></span> " + currentQ.question);
  for(var i = 0; i < currentQ.choices.length; i++){
 
  var option =$("<label>");
  option.html("<input type='radio' name='radioSelect' value ='" + 
  currentQ.choices[i] + "'>" + currentQ.choices[i]);
  $("#choices").append(option);
  }
  $("label").after("</br>");
  var btn = $("<button id='verify' type='button'>").addClass("btn btn-lg btn-primary").text("Submit");
  $("#choices").append(btn);
  answer = currentQ.correctChoice;
  imgSrc = currentQ.image;
}

// ============================
// Function to pull next question

var nextQ = function(){
  $("#choices").empty();
  count++;
  if(count<questionArray.length){
	displayQnA(questionArray[count]);
	timeOut = false;
	time = 30;
	$("#timer").html("<span class='glyphicon glyphicon-hourglass'></span> Time Remaining: " + time);
	timer();
	}
  else{
    $("#timer").text("");
    $("#question").text("The results are in:");
  	$("#choices").append("<p>Correct Answers: <b>" + numCorrect + "</b></p>");
    $("#choices").append("<p>Incorrect Answers: <b>" + numIncorrect + "</b></p>");
    $("#choices").append("<p>Unanswered Questions: <b>" + unanswered + "</b></p>");
    var btn = $("<button type='button'>").addClass("btn btn-lg btn-primary reset").text("Try again?");
    $("#choices").append(btn);
  }
}

// Function to display correct answer
var showAnswer = function(){
  var checkA = isCorrectChoice();
  $("#choices").empty();
  if(checkA){
    $("#question").html("You are correct! The answer is: <b>" + answer + "</b>");
  }
  else{
    $("#question").html("Nope! The correct answer is: <b>" + answer + "</b>");
  }
  $("#choices").append("<img src='" + imgSrc + "' alt='correctAnswer'>");
  setTimeout(nextQ,4000);
}
// ========================================
// Check if correct answer selected

var isCorrectChoice = function (){
  var userSelected = $('input[name=radioSelect]:checked','#choices').val();
  if(!$("input[name=radioSelect]:checked").val()){
  unanswered++;
  return false;
  }
  else if(userSelected === answer){
    numCorrect++;
    return true;
  }
  else{
    numIncorrect++;
    return false;
  }
}

// ==============================
// Submit button event
$(document).on("click", "#verify", function(){
  timeOut = true;
  clearInterval(intervalId);
  showAnswer();
});
//  ================
// Start button and restart button
$(document).on("click", ".reset", function(){
  reset();
});



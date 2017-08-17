// Timer Countdown variables and functions
var time = 30;
var intervalId;
var timeOut = false;

$("#timer").text(time);

var countdown = function(){
  time--;
  $("#timer").text(time);

  if(time===0){
  	timeOut = true;
  	clearInterval(intervalId);
  }
}

var start = function(){
  if (!timeOut){
  	time = 30;
    intervalId = setInterval(countdown,1000)
  }
}

start();

// =================================
// Questions

var question1 = {
	main: "This is the first Question.",
	choices: ["Choice a", "Choice b", "Choice c", "Choice d"],
	correctChoice: "Choice c"
}

var question2 = {
	main: "This is the second Question.",
	choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
	correctChoice: "Choice 1"
}

var question3 = {
	main: "This is the third Question.",
	choices: ["Choice i", "Choice ii", "Choice iii", "Choice iv"],
	correctChoice: "Choice iv"
}
// ==================================
// Counters
var numCorrect = 0;
var numIncorrect = 0;

// ==============================
// Create radio buttons populated with choices

var displayQnA = function(currentQ){
  $("#question").text(currentQ.main);
  for(var i = 0; i < currentQ.choices.length; i++){
 
 	var option =$("<label>");
 	option.html("<input type='radio' name='radioSelect' value ='" + 
 	currentQ.choices[i] + "'>" + currentQ.choices[i]);
 	$("#choices").append(option);
  }
  $("label").after("</br>");
  var btn = $("<button id='verify'>").addClass("btn btn-primary").text("Submit");
  $("#choices").append(btn);

}

displayQnA(question1);

// ========================================
// Check if correct answer checked

var isCorrectChoice = function (currentQ){
  var userSelected = $('input[name=radioSelect]:checked','#choices').val();
  if(userSelected === currentQ.correctChoice){
    numCorrect++;
    return true;
	}
  else{
  	numIncorrect++;
  	return false;
  }
}
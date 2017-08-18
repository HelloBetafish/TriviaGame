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
  	reset();
  }
}

var reset = function(){
  $("#choices").empty();
  count++;
  if(count<questionArray.length){
	displayQnA(questionArray[count]);
	timeOut = false;
	time = 30;
	$("#timer").text(time);
	timer();
	}
  else{
  	$("#choices").text("The End!");
  }
}


var timer = function(){
  if (!timeOut){
    intervalId = setInterval(countdown,1000)
  }
}


// =================================
// Questions
var questionArray = [
  {question: "This is the first Question.",
	choices: ["Choice a", "Choice b", "Choice c", "Choice d"],
	correctChoice: "Choice c",
	img: "test.jpeg"},
  {question: "This is the second Question.",
	choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
	correctChoice: "Choice 1",
	img: "test2.jpeg"},
  {question: "This is the third Question.",
  choices: ["Choice i", "Choice ii", "Choice iii", "Choice iv"],
  correctChoice: "Choice iv",
  img: "test3.jpeg"}
]
// ==================================
// Counters
var numCorrect = 0;
var numIncorrect = 0;
var unanswered = 0;
var count = 0;

// ==============================
// Create radio buttons populated with choices

var displayQnA = function(currentQ){
  $("#question").text(currentQ.question);
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

 

// ========================================
// Check if correct answer checked

var isCorrectChoice = function (currentQ){
  var userSelected = $('input[name=radioSelect]:checked','#choices').val();
  if(userSelected === currentQ.correctChoice){
    numCorrect++;
    $("#question").text("Correct!");
    console.log(numCorrect);
    return true;
	}
  else{
  	numIncorrect++;
  	$("#question").text("Incorrect!");
  	console.log(numIncorrect);
  	return false;
  }
}

// ============================
// Make submit button check response
$("#verify").on("click", function() {
  isCorrectChoice(questionArray[y]);
  if(isCorrectChoice === true){
  	console.log("Correct!");
  	// $("#question").text("Correct!");
  }
  else{
  	console.log("Incorrect!");
  	// $("#question").text("Incorrect!");
  }
});

// ================
// Test game

// for(var i = 0; i < questionArray.length; i++){
// 	var currentQ = questionArray[i];
// 	displayQnA(currentQ);
// 	console.log(currentQ);
// }

// var y = 0;
// y++
// displayQnA(questionArray[y]);

// ======================
// Game Flow

timer();
displayQnA(questionArray[count]);

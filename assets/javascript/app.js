
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
  	showAnswer();
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

var showAnswer = function(){
  var checkA = isCorrectChoice();
  $("#choices").empty();
  if(checkA){
    $("#question").text("You are correct! The answer is: " + answer);
  }
  else{
    $("#question").text("Sorry! The correct answer is: " + answer);
  }
  $("#choices").append("<img src='" + imgSrc + "'>");
  setTimeout(reset,5000);
}
// ========================================
// Check if correct answer checked

var isCorrectChoice = function (){
  var userSelected = $('input[name=radioSelect]:checked','#choices').val();
  if(userSelected === answer){
    numCorrect++;
    console.log(numCorrect);
    return true;
  }
  else{
    numIncorrect++;
    console.log(numIncorrect);
    return false;
  }
}

// ============================
// Make submit button check response




// =================================
// Questions
var questionArray = [
  {question: "This is the first Question.",
	choices: ["Choice a", "Choice b", "Choice c", "Choice d"],
	correctChoice: "Choice c",
	image: "https://static.fjcdn.com/gifs/Cat_439f66_783457.gif"},
  {question: "This is the second Question.",
	choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
	correctChoice: "Choice 1",
	image: "http://www.dream-wallpaper.com/free-wallpaper/nature-wallpaper/waterfall-and-stream-2-wallpaper/1280x1024/free-wallpaper-11.jpg"},
  {question: "This is the third Question.",
  choices: ["Choice i", "Choice ii", "Choice iii", "Choice iv"],
  correctChoice: "Choice iv",
  image: "http://images.all-free-download.com/images/graphiclarge/beautiful_natural_scenic_03_hd_picture_166230.jpg"}
]
// ==================================
// Counters
var numCorrect = 0;
var numIncorrect = 0;
var unanswered = 0;
var count = 0;
var answer = "";
var imgSrc = "";

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
  var btn = $("<button id='verify' type='button'>").addClass("btn btn-primary").text("Submit");
  $("#choices").append(btn);
  answer = currentQ.correctChoice;
  imgSrc = currentQ.image;
}

// Submit button event
$(document).on("click", "#verify", function(){
  timeOut = true;
  clearInterval(intervalId);
  showAnswer();
});
// // ================

timer();
displayQnA(questionArray[count]);

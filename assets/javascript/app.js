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

var createBtns = function(currentQ){
  for(var i = 0; i < currentQ.choices.length; i++){
 
 	var option =$("<label>");
 	option.html("<input type='radio' name='radioSelect'>" + currentQ.choices[i]);
 	$("#choices").append(option)

  	// var option = $("<input>").attr({type:"radio", name:"radioSelect"});
  	// option.val(currentQ.choices[i]);
  	// option.text(currentQ.choices[i]);
  	// $("#choices").append(option);

   //  $("#choices").append("<input type='radio'>" + currentQ.choices[i] + "<br>");
  	// $("input[type=radio]").val(currentQ.choices[i]);
  	// $("input[type=radio]").attr("name","radioSelect");

  	// var option = $("<input>").attr({type:"radio", name:"radioSelect"});
  	// option.val(currentQ.choices[i]);
  	// // option.text(currentQ.choices[i]);
  	// $("#choices").append(option);
  }
  $("label").after("</br>");
}

createBtns(question1);

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
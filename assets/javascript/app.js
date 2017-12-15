


$(document).ready(function(){


var correctAnswer = 0;
var incorrectAnswer = 0;
var noAnswer = 0;
var time = 45;
var intervalId;

// GAME START
$("#start-button").on("click", function(){
$(".wrapper").css("display", "none");
$("form").css("display", "block");
run();

});




// Submit Button FORM
$("#submit-button").on("click", function(){
$("form").css("display", "none");
$(".wrapper2").css("display", "block");
clearInterval(intervalId);
triviaStart();
});


//Trivia Start Function
function triviaStart(){
  $("form").css("display", "none");
$(".wrapper2").css("display", "block");
var answers =[
$('input[name=optionRadio1]:checked').val(),
$('input[name=optionRadio2]:checked').val(),
$('input[name=optionRadio3]:checked').val(),
];
for (var i = 0; i < answers.length; i++) {
  console.log(answers[i]);
  
  if (answers[i] === "7") {
    correctAnswer++;
    

  }
   if (answers[i] === "0") {
    incorrectAnswer++;
    

}
else if(!answers[i])  {
   noAnswer++;
    

}
}

$("#noanswer").text(noAnswer);
$("#incorrect").text(incorrectAnswer);
$("#correct").text(correctAnswer);


}



function run() {
 
      intervalId = setInterval(decrement, 1000);

}
function decrement() {
      time--;

      $("#display").html("<h2> Time Left: " + time + "</h2>");
      if (time == 0) {
        clearInterval(intervalId);
        triviaStart();

      }

    }
  










// END Doc Ready
});

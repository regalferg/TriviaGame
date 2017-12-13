var correctAnswer = 0;
var incorrectAnswer = 0;
var noAnswer = 0;
var time = 0;



$("#start-button").on("click", function(){
$(".wrapper").css("display", "none");
$("form").css("display", "block");
    // time =  setTimeout(30000);
    // var displayTime = timeConverter(time);

    // $("#display").html(displayTime);

       setTimeout(function(){
        fiveSeconds();
      },5000);
          function fiveSeconds() {
            console.log("5 Seconds Left!!!");

        $("#display").html("<h2> 5 SECONDS LEFT</h2>");
        
      }



});

$("#submit-button").on("click", function(){
$("form").css("display", "none");
$(".wrapper2").css("display", "block");

});

$("#triviaForm input").on("change",function(){


	if ($('input[type=radio]:checked').val() == 7) {

correctAnswer++;
$("#correct").html(correctAnswer);


};
 if($('input[type=radio]:checked', '#triviaForm').val() == 0){
		incorrectAnswer++;
	$("#incorrect").html(incorrectAnswer);
	}
	

if ($("#optionRadio3").prop('checked') == false) {

			noAnswer++;
	$("#noanswer").html(noAnswer);
	console.log("no answer");
}




});


  timeConverter =  function(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }

    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
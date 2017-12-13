var correctAnswer = 0;
var incorrectAnswer = 0;
var noAnswer = 0;



$("#start-button").on("click", function(){
$(".wrapper").css("display", "none");
$("form").css("display", "block");


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

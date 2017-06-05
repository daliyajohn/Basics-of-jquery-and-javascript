$(document).ready(function()
{
	$('#sumbit').addClass('button_summit'); // add class to given button using addClass() function
	$('#sumbit').removeClass('button_summit'); // remove class to given button using removeClass() function
	$('#sumbit').css('color', 'red'); // add text color to given button using css() function
	$('#sumbit').prop('disabled', true); // disabled button using prop() function
	$('#sumbit').html('send'); //Change Text Inside an Element Using jQuery
	$('#sumbit1').remove(); //Remove an Element Using jQuery
	$('.third1').clone().appendTo('.left'); //Clone an Element Using jQuery
	$('.first').parent().css('color', 'red'); //Target the Parent of an Element Using jQuery
	$('.right').children().css('color', 'green'); //Target the Children of an Element Using jQuery

});


var myName; // declare variable in javascript
var name = "daliya"; // assign value to the variable
var add = a + b; //add 2 values and store in one variable
var sub = a - b; //subtract 2 values and store in one variable
var mul = a * b; //multiply 2 values and store in one variable
var div = a / b; //divide 2 values and store in one variable
$(document).ready(function()
{
	$('#sumbit').addClass('button_summit'); // add class to given button using addClass() function
	$('#sumbit').removeClass('button_summit'); // remove class to given button using removeClass() function
	$('#sumbit').css('color', 'red'); // add text color to given button using css() function
	$('#sumbit').prop('disabled', true); // disabled button using prop() function
	$('#sumbit').html('send'); //Change Text Inside an Element Using jQuery
	$('#sumbit1').remove(); //Remove an Element Using jQuery
});
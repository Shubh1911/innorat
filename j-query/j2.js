$('div').css(
{
	width:"100%",
	height:"30px",
	backgroundColor:"#E5EECC",
});
$('p').css(
{
	textAlign:"center",
	paddingTop:"5px"
});
$('#div1').css(
{
	width:"100%",
	height:"300px",
	backgroundColor:"#dfedff"
});
$('h3').css(
{
	textAlign:"center",
	paddingTop:"100px"
});

$(document).ready(function()
{
$('#div1').slideUp();

$('div').click(function()
{
	$('#div1').slideDown(2000);

	});
});
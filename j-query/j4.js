$(document).ready(function()
{
$('.header').click(function()
{
	$('.header').css("backgroundColor","blue");
});
$('.sidebar').click(function()
{
$('.sidebar').html("leftbar");
});

$('.extra').click(function()
{
$('.content').fadeOut();
});
$('.footer').click(function()
{
	$('#popup').show();
});
$('#close').click(function() {

$('#popup').hide();
});
});
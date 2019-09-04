$(document).ready(function(){
console.log("working or NAH?")

$("#first").click(function () {
	console.log("heyo")
	$(".about").css("opacity" , "1")
});
$("#second").click(function () {
	console.log("heyo")
	$(".imagebox1").css("opacity" , "1")
});
$("#third").click(function () {
	console.log("heyo")
	$(".imagebox2").css("opacity" , "1")
});
$("#fourth").click(function () {
	console.log("heyo")
	$(".imagebox3").css("opacity" , "1")
});
$("#box1").click(function () {
	console.log("heyo")
	$(".about").css("opacity" , "0")
});
$("#box2").click(function () {
	console.log("heyo")
	$(".imagebox1").css("opacity" , "0")
});
$("#box3").click(function () {
	console.log("heyo")
	$(".imagebox2").css("opacity" , "0")
});
$("#box4").click(function () {
	console.log("heyo")
	$(".imagebox3").css("opacity" , "0")
});

$(".about").draggable();
$(".imagebox1").draggable();
$(".imagebox2").draggable();
$(".imagebox3").draggable();

});
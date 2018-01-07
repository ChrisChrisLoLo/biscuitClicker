//Code is mostly for non- game related functions that are called by HTML events

//prevents the button image from being dragged
document.getElementById("biscuitButton").ondragstart = function() { return false; };

function biscuitDown(){
	document.getElementById("biscuitButton").src = "assets/images/cookiePressed.png";
}
function biscuitUp(){
	document.getElementById("biscuitButton").src = "assets/images/cookie.png";
}
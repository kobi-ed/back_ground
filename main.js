// This functionality is triggered only when the button is clicked
function changeBackgroundColor() {
	var Red = Math.floor(Math.random() * 256)
	var Green = Math.floor(Math.random() * 256)
	var Blue = Math.floor(Math.random() * 256)
	// Grab the new randomly generated color code
	var randomColor = "rgb(" + Red + ", " + Green + ", " + Blue + ")";
	// Set the background of the website to this new color code
	document.body.style.background = randomColor;
}

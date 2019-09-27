function main() {
	var colors = ["red", "blue", "green", "orange", "yellow", "purple", "pink", "black", "grey"];
	document.body.style.backgroundImage = "none";
	var choice = document.getElementById("colorPick");
	var colorChoice = choice.options[choice.selectedIndex].value;
	
	document.body.style.backgroundColor = colors[colorChoice];
	
	var sentence = "Your color is "+colors[colorChoice];
	document.getElementById("colorDisplay").innerHTML = sentence;
	document.getElementById("colorDisplay").style.color = colors[colorChoice];
};

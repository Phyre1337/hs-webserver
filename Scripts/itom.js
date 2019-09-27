function main() {
	var unit = document.getElementById("measurement").value;
	
	var finalAmount = parseInt(unit) * 0.0254;
	var finalSentence = unit+" inch(s) is equal to "+finalAmount+" meters."
	
	document.getElementById("answer").innerHTML = finalSentence;
}

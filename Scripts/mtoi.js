function main() {
	var unit = document.getElementById("measurement").value;
	
	var finalAmount = parseFloat(unit) * 39.370;
	
	if (finalAmount > 12) {
		finalAmount = parseFloat(finalAmount) / 12;
		finalSentence = unit+" meters is equal to "+(finalAmount).toFixed(2)+" feet.";
		document.getElementById("answer").innerHTML = finalSentence;
	} else {
		finalSentence = unit+" meters is equal to "+(finalAmount).toFixed(2)+" inches.";
		document.getElementById("answer").innerHTML = finalSentence;
	}
};

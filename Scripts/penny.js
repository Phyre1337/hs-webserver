function main() {
	///Creating the starting variables, both set to 0.01 because you start off with one penny
	var startPay = parseFloat(0.01);
	var total = parseFloat(0.01);
	///Retrieving the text from the first box to use later on
	var divData = document.getElementById("firstBox");
	///Creating blank text box to format sentence for later on
	var text = "";
	///Creating for loop to make value for each of the 31 days
	for (days = 2; days < 32; days++) {
		///Doubling the starting pay for each day
		startPay = startPay * 2;
		///Getting the sum for total pay
		total = total + startPay;
		///Creating sentences to display on page
		text += "<center><h3>On day " + days + ", you earned $" + startPay + ", and have accumulated $" + total.toFixed(2) + "!</h3></center>";
	}
	divData.innerHTML = divData.innerHTML + text;
	var button1 = document.getElementById("onlyButton");
    button1.parentNode.removeChild(button1);
}

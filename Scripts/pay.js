///Creating simple function to reload page with the click of a button.
function refresh() {
	document.location.reload();
}
///Creating main function to calculate the employee pay.
function calculate() {
	///Disabling input boxes
	document.getElementById("pay").disabled = true;
	document.getElementById("hours").disabled = true;
	document.getElementById("name").disabled = true;
	///Adding button to reset page at bottom.
	document.getElementById("resetbutton").innerHTML = "<button onClick='refresh()'>Reset Page</button>";
	///Removing the buttons from the middle.
	var button1 = document.getElementById("b1");
    button1.parentNode.removeChild(button1);
    var button2 = document.getElementById("b2");
    button2.parentNode.removeChild(button2);
    ///Getting hours worked and payrate from page.
	var mathPay = parseInt(document.getElementById("pay").value);
	var mathHours = parseInt(document.getElementById("hours").value);
	
	///Creating if statement to detect if you worked overtime hours.
	if (mathHours > 40) {
		///Calculating overtime hours and setting normal hours.
		var othours = mathHours - 40;
		mathHours = 40;
		///Sets overtime hours on page.
		document.getElementById("displayothours").innerHTML = othours + " hours";
		///Creating overtime pay.
		var otpay = mathPay * 1.5;
		///Calculating both overtime and regular pay.
		var disotpay = otpay * othours;
		var dispay = mathPay * mathHours;
		///Display regular pay and overtime pay.
		document.getElementById("displaypay").innerHTML = "$" + dispay.toFixed(2);
		document.getElementById("displayotpay").innerHTML = "$" + disotpay.toFixed(2);
		///Calculating net pay.
		var disnetpay = disotpay + dispay;
		///Displaying net pay.
		document.getElementById("displaynetpay").innerHTML = "$" + disnetpay.toFixed(2);
	} else {
		///Sets overtime hours on page to zero.
		document.getElementById("displayothours").innerHTML = "0 hours";
		///Sets overtime pay on page to zero.
		document.getElementById("displayotpay").innerHTML = "$0";
		///Calculating the regular pay.
		var dispay = mathPay * mathHours;
		///Setting regular pay and net pay to same since there is no overtime hours.
		document.getElementById("displaypay").innerHTML = "$" + dispay.toFixed(2);
		var disnetpay = dispay;
		document.getElementById("displaynetpay").innerHTML = "$" + disnetpay.toFixed(2);
	}
	
	///Calculating deductions and displaying them.
	var fedtax = disnetpay * 0.08;
	document.getElementById("displayfed").innerHTML = "$" + fedtax.toFixed(2);
	var fica = disnetpay * 0.07;
	document.getElementById("displayfica").innerHTML = "$" + fica.toFixed(2);
	var statetax = disnetpay * 0.04;
	document.getElementById("displaystate").innerHTML = "$" + statetax.toFixed(2);
	var insurance = 26.54;
	document.getElementById("displayinsurance").innerHTML = "$" + insurance.toFixed(2);
	var deductTotal = fedtax + fica + statetax + insurance;
	document.getElementById("totaldeducts").innerHTML = "$" + deductTotal.toFixed(2);
	
	///Calculating gross pay and displaying on page.
	var gross = disnetpay - deductTotal;
	document.getElementById("grosspay").innerHTML = "$" + gross.toFixed(2);
	
	///Retrieving name of user.
	var user = document.getElementById("name").value;
	
	///Using name on webpage.
	document.getElementById("deductions").innerHTML = user + "'s Deductions";
	document.getElementById("displaygross").innerHTML = user + "'s Gross Pay";
}
///Fed - 0.08, FICA - 0.07, State - 0.04, Insurance - 26.54

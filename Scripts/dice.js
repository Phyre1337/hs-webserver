var wallet = 100


function main() {
	var image = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
	var randImage = Math.floor(Math.random() * image.length);
	var randImage2 = Math.floor(Math.random() * image.length);
	
	randImage = parseInt(randImage) + 1;
	randImage2 = parseInt(randImage2) + 1;
	
	if (randImage + randImage2 == 7) {
		var notif = "You win!";
		wallet = parseInt(wallet) + 50;
	} else if (randImage + randImage2 == 11) {
		var notif = "You win!";
		wallet = parseInt(wallet) + 50;
	} else if (randImage + randImage2 == 2) {
		var notif = "You lose.";
		document.getElementById("resetbtn").innerHTML = "<button onClick='window.location.reload()'>Restart</button>";
		document.getElementById("mainButton").disabled = true;
		document.getElementById("loss").innerHTML = "You lost with $"+wallet+", click button below to restart game from $0.";
		wallet = 0;
		
	} else if (randImage + randImage2 == 12) {
		var notif = "You lose.";
		document.getElementById("resetbtn").innerHTML = "<button onClick='window.location.reload()'>Restart</button>";
		document.getElementById("mainButton").disabled = true;
		document.getElementById("loss").innerHTML = "You lost with $"+wallet+", click button below to restart game from $0.";
		wallet = 0;
	} else {
		var notif = "Go again.";
		wallet = parseInt(wallet) - 5;
	};
	
	var finalAmount = "$" + wallet
	
	document.getElementById("display1").innerHTML = "<img src='Images/dice"+randImage+".png' height='200'>";
	document.getElementById("message").innerHTML = notif;
	document.getElementById("display2").innerHTML = "<img src='Images/dice"+randImage2+".png' height='200'>";
	document.getElementById("money").innerHTML = finalAmount;
	
	console.log(wallet);
	console.log(finalAmount);
};

/* 
   7 and 11 = win
   12 and 2 = loss
*/

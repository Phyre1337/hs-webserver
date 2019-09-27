function main() {
		///Creating variables for later use in red squares
		var midRed = parseInt(document.getElementById("num").value);
		var red1 = parseInt(document.getElementById("num").value) + 3;
		var red2 = parseInt(document.getElementById("num").value) - 4;
		var red3 = parseInt(document.getElementById("num").value) + 1;
		var red4 = parseInt(document.getElementById("num").value) - 2;
		var red6 = parseInt(document.getElementById("num").value) + 2;
		var red7 = parseInt(document.getElementById("num").value) - 1;
		var red8 = parseInt(document.getElementById("num").value) + 4;
		var red9 = parseInt(document.getElementById("num").value) - 3;
		///Filling in variables to red squares
		document.getElementById("mid").innerHTML = midRed;
		document.getElementById("topleft").innerHTML = red1;
		document.getElementById("topmid").innerHTML = red2;
		document.getElementById("topright").innerHTML = red3;
		document.getElementById("midleft").innerHTML = red4;
		document.getElementById("midright").innerHTML = red6;
		document.getElementById("botleft").innerHTML = red7;
		document.getElementById("botmid").innerHTML = red8;
		document.getElementById("botright").innerHTML = red9;
		
		///Doing math to define variables after for black squares
		var numInput = parseInt(document.getElementById("num").value);
		var product = (parseInt(document.getElementById("num").value) * 3)
		///Defining variables for black squares
		
		///Defining diagonal phrase
		var diagonal = "The sum of the diagonal = " + product;
		///Defining vertical and horizontal phrase
		var side = "The sum = " + product;
		///Defining product of magic square (number input multiplied by 3)
		var definition = numInput + " * 3 = " + product;
		///Filling in variables for black squares
		document.getElementById("exp").innerHTML = definition;
		document.getElementById("diag1").innerHTML = diagonal;
		document.getElementById("sum1").innerHTML = side;
		document.getElementById("sum2").innerHTML = side;
		document.getElementById("sum3").innerHTML = side;
		document.getElementById("diag2").innerHTML = diagonal;
		document.getElementById("sum5").innerHTML = side;
		document.getElementById("sum6").innerHTML = side;
		document.getElementById("sum7").innerHTML = side;
		
		///Part of april fools prank
		var paragraph = document.getElementById("l");
		var text = document.createTextNode("!!!!");
		paragraph.appendChild(text);
};

function checkEnter(event) {
		if (event.keycode == 13 || event.which == 13)
		{ 
			main();
		};
};

///This is just for my april fools prank, copy of the main function but doesn't execute prank for when loading the page
function loadMain() {
		///Creating variables for later use in red squares
		var midRed = parseInt(document.getElementById("num").value);
		var red1 = parseInt(document.getElementById("num").value) + 3;
		var red2 = parseInt(document.getElementById("num").value) - 4;
		var red3 = parseInt(document.getElementById("num").value) + 1;
		var red4 = parseInt(document.getElementById("num").value) - 2;
		var red6 = parseInt(document.getElementById("num").value) + 2;
		var red7 = parseInt(document.getElementById("num").value) - 1;
		var red8 = parseInt(document.getElementById("num").value) + 4;
		var red9 = parseInt(document.getElementById("num").value) - 3;
		///Filling in variables to red squares
		document.getElementById("mid").innerHTML = midRed;
		document.getElementById("topleft").innerHTML = red1;
		document.getElementById("topmid").innerHTML = red2;
		document.getElementById("topright").innerHTML = red3;
		document.getElementById("midleft").innerHTML = red4;
		document.getElementById("midright").innerHTML = red6;
		document.getElementById("botleft").innerHTML = red7;
		document.getElementById("botmid").innerHTML = red8;
		document.getElementById("botright").innerHTML = red9;
		
		///Doing math to define variables after for black squares
		var numInput = parseInt(document.getElementById("num").value);
		var product = (parseInt(document.getElementById("num").value) * 3)
		///Defining variables for black squares
		
		///Defining diagonal phrase
		var diagonal = "The sum of the diagonal = " + product;
		///Defining vertical and horizontal phrase
		var side = "The sum = " + product;
		///Defining product of magic square (number input multiplied by 3)
		var definition = numInput + " * 3 = " + product;
		///Filling in variables for black squares
		document.getElementById("exp").innerHTML = definition
		document.getElementById("diag1").innerHTML = diagonal;
		document.getElementById("sum1").innerHTML = side;
		document.getElementById("sum2").innerHTML = side;
		document.getElementById("sum3").innerHTML = side;
		document.getElementById("diag2").innerHTML = diagonal;
		document.getElementById("sum5").innerHTML = side;
		document.getElementById("sum6").innerHTML = side;
		document.getElementById("sum7").innerHTML = side;
};

function main() {
	var color = ["red", "green", "blue", "yellow", "violet", "purple", "grey", "orange", "black", "pink", "khaki", "indigo"];
	var image = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.png", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"];
	var randColor = Math.floor(Math.random() * color.length);
	var randImg = Math.floor(Math.random() * image.length);
	document.body.style.backgroundImage = "none";
	document.body.style.backgroundColor = color[randColor];
	document.getElementById('pic').innerHTML = "<img src = 'Images/"+image[randImg]+"' height = '350'>";
	switch(randColor) {
		case 0:
			document.getElementById("colors").style.backgroundColor = "green";
			document.getElementById("colors").style.color = color[randColor];
			document.getElementById("colors2").style.backgroundColor = "green";
			document.getElementById("colors2").style.color = color[randColor];
			break;
		case 1:
			document.getElementById("colors").style.backgroundColor = "blue";
			document.getElementById("colors").style.color = color[randColor];
			document.getElementById("colors2").style.backgroundColor = "blue";
			document.getElementById("colors2").style.color = color[randColor];
			break;
		case 2:
			document.getElementById("colors").style.backgroundColor = "yellow";
			document.getElementById("colors").style.color = color[randColor];
			document.getElementById("colors2").style.backgroundColor = "yellow";
			document.getElementById("colors2").style.color = color[randColor];
			break;
		case 3:
			document.getElementById("colors").style.backgroundColor = "violet";
			document.getElementById("colors").style.color = color[randColor];
			document.getElementById("colors2").style.backgroundColor = "violet";
			document.getElementById("colors2").style.color = color[randColor];
			break;
		case 4:
			document.getElementById("colors").style.backgroundColor = "purple";
			document.getElementById("colors").style.color = color[randColor];
			document.getElementById("colors2").style.backgroundColor = "purple";
			document.getElementById("colors2").style.color = color[randColor];
			break;
		case 5:
			document.getElementById("colors").style.backgroundColor = "grey";
			document.getElementById("colors").style.color = color[randColor];
			document.getElementById("colors2").style.backgroundColor = "grey";
			document.getElementById("colors2").style.color = color[randColor];
			break;
		case 6:
			document.getElementById("colors").style.backgroundColor = "orange";
			document.getElementById("colors").style.color = color[randColor];
			document.getElementById("colors2").style.backgroundColor = "orange";
			document.getElementById("colors2").style.color = color[randColor];
			break;
		case 7:
			document.getElementById("colors").style.backgroundColor = "black";
			document.getElementById("colors").style.color = color[randColor];
			document.getElementById("colors2").style.backgroundColor = "black";
			document.getElementById("colors2").style.color = color[randColor];
			break;
		case 8:
			document.getElementById("colors").style.backgroundColor = "pink";
			document.getElementById("colors").style.color = color[randColor];
			document.getElementById("colors2").style.backgroundColor = "pink";
			document.getElementById("colors2").style.color = color[randColor];
			break;
		case 9:
			document.getElementById("colors").style.backgroundColor = "khaki";
			document.getElementById("colors").style.color = color[randColor];
			document.getElementById("colors2").style.backgroundColor = "khaki";
			document.getElementById("colors2").style.color = color[randColor];
			break;
		case 10:
			document.getElementById("colors").style.backgroundColor = "indigo";
			document.getElementById("colors").style.color = color[randColor];
			document.getElementById("colors2").style.backgroundColor = "indigo";
			document.getElementById("colors2").style.color = color[randColor];
			break;
		case 11:
			document.getElementById("colors").style.backgroundColor = "red";
			document.getElementById("colors").style.color = color[randColor];
			document.getElementById("colors2").style.backgroundColor = "red";
			document.getElementById("colors2").style.color = color[randColor];
			break;
		}
};

function repeat() {
	main();
	timer = setTimeout("repeat()", 2000);
	return;
};

function stop() {
	clearTimeout(timer);
};

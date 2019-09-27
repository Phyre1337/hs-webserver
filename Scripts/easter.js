function main() {
	var list = ["March", "April"];
    ///Let y be the year (such as 1800 or 2001).
    var stry = document.getElementById("year").value;
    ///Converting y, as a string, to an integer.
    var y = parseInt(stry);
    ///Divide y by 19 and call the remainder a. Ignore the quotient.
    var a = y % 19;
    ///Divide y by 100 to get a quotient b and a remainder c.
    var b = y / 100;
    var c = y % 100;
    ///Divide b by 4 to get a quotient d and a remainder e.
    var d = parseInt(b) / 4;
    var e = parseInt(b) % 4;
    ///Divide 8 * b + 13 by 25 to get a quotient g. Ignore the remainder.
    var eq1 = 8 * parseInt(b) + 13;
    var g = parseInt(eq1) / 25;
    ///Divide 19 * a + b - d - g + 15 by 30 to get a remainder h. Ignore the quotient.
    var eq2 = 19 * parseInt(a) + parseInt(b) - parseInt(d) - parseInt(g) + 15;
    var h = parseInt(eq2) % 30;
    ///Divide c by 4 to get a quotient j and a remainder k.
    var j = parseInt(c) / 4;
    var k = parseInt(c) % 4;
    ///Divide a + 11 * h by 319 to get a quotient m. Ignore the remainder.
    var eq3 = parseInt(a) + 11 * parseInt(h);
    var m = parseInt(eq3) / 319;
    ///Divide 2 * e + 2 * j - k - h + m + 32 by 7 to get a remainder r. Ignore the quotient.
    var eq4 = 2 * parseInt(e) + 2 * parseInt(j) - parseInt(k) - parseInt(h) + parseInt(m) + 32;
    var r = parseInt(eq4) % 7;
    ///Divide h - m + r + 90 by 25 to get a quotient n. Ignore the remainder.
    var eq5 = parseInt(h) - parseInt(m) + parseInt(r) + 90;
    var n = parseInt(eq5) / 25;
    ///Divide h - m + r + n + 19 by 32 to get a remainder p. Ignore the quotient.
    var eq6 = parseInt(h) - parseInt(m) + parseInt(r) + parseInt(n) + 19;
    var p = parseInt(eq6) % 32;
    ///Getting month from integer.
    if (parseInt(n) == 3) {
		n = "March"
	}
	if (parseInt(n) == 4) {
		n = "April"
	}
    ///Printing the end result.
    var sentence = "In " + y + ", Easter Sunday fell on " + n + " " + parseInt(p) + ".";
    document.getElementById("answer").innerHTML = sentence;
}

function checkEnter(event) {
		if (event.keycode == 13 || event.which == 13)
		{ 
			main();
		};
};

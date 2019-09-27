function wait() {
	var randNum = Math.floor(Math.random() * 4);
	var timeWaited = parseInt(randNum) * 1000;
	document.getElementById("lol").innerHTML = "Thinking...";
	setTimeout(answer, timeWaited);
};

function answer() {
	var options = [
	"It is certain.",
	"It is decidedly so.",
	"Without a doubt.",
	"Yes - definitely.",
	"You may rely on it.",
	"As I see it, yes.",
	"Most likely.",
	"Outlook good.",
	"Yes.",
	"Signs point to yes.",
	"Reply hazy, try again.",
	"Ask again later.",
	"Better not tell you now.",
	"Cannot predict now.",
	"Concentrate and ask again.",
	"Don't count on it.",
	"My reply is no.",
	"My sources say no.",
	"Outlook not so good.",
	"Very doubtful."
	];
	var decision = options[Math.floor(Math.random() * options.length)];
	document.getElementById("lol").innerHTML = decision;
}

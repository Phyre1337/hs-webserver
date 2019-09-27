function main() {
    var firstNum = document.getElementById("fnum").value;
    var secondNum = document.getElementById("snum").value;
    var sum = parseInt(firstNum) + parseInt(secondNum);
    document.getElementById("answer").innerHTML = sum;
}
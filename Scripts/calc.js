function main() {
    var firstNum = document.getElementById("fnum").value;
    var secondNum = document.getElementById("snum").value;
    var prod = document.getElementById("opera");
    var oper = prod.options[prod.selectedIndex].value;
    
    if (oper == "add") {
        sum = parseFloat(firstNum) + parseFloat(secondNum);
        document.getElementById("answer").innerHTML = (sum).toFixed(1);
    };
    if (oper == "subtract") {
        dif = parseFloat(firstNum) - parseFloat(secondNum);
        document.getElementById("answer").innerHTML = (dif).toFixed(1);
    };
    if (oper == "mult") {
        prdt = parseFloat(firstNum) * parseFloat(secondNum);
        document.getElementById("answer").innerHTML = (prdt).toFixed(2);
    };
    if (oper == "div") {
        quo = parseFloat(firstNum) / parseFloat(secondNum);
        document.getElementById("answer").innerHTML = (quo).toFixed(2);
    };
    if (oper == "exp") {
        exponent = parseFloat(firstNum) ** parseFloat(secondNum);
        document.getElementById("answer").innerHTML = (exponent).toFixed(2);
    };
}

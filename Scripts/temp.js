function Far2Cel() {
    var far = document.getElementById("temp").value
    var cel = parseInt(far) - 32
    var cel2 = cel * (5/9)
    document.getElementById("answer").innerHTML = parseInt(far) + " degrees farenheit is equal to " + parseInt(cel2) + " degrees celsius."
}
function Cel2Far() {
    var cel = document.getElementById("temp").value
    var far = parseInt(cel) * (9/5)
    var far2 = far + 32
    document.getElementById("answer").innerHTML = parseInt(cel) + " degrees celsius is equal to " + parseInt(far2) + " degrees farenheit."
}
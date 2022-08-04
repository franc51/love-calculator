
function showLove(){
    var input = document.getElementById("text").value;
    var n = Math.random();
    n = n * 100;
    n = Math.floor(n) + 1 ;
    document.getElementById("result").innerHTML = input + " loves you " + n + " %" ;
}


var button = document.getElementById("btn");

button.addEventListener('click', showLove);







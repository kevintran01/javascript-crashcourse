document.getElementById("bodyText").innerHTML = "Greetings Class!";

var x = document.getElementById("main");
var y = x.getElementsByTagName("p");
document.getElementById("demo").innerHTML = "The second paragraph (index 1) inside 'main' is: " + y[1].innerHTML;
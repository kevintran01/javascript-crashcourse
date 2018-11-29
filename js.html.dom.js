document.getElementById("bodyText").innerHTML = "Greetings Class!";

var x = document.getElementById("main");
var y = x.getElementsByTagName("p");
document.getElementById("demo").innerHTML = "The second paragraph (index 1) inside 'main' is: " + y[1].innerHTML;

var element = document.getElementById('id01');
element.innerText = ("New Heading");

var changePicture = document.getElementById('myImage');
changePicture.src = "images/sunset1.jpg";

var changeCssStyle = document.getElementById('p2');
changeCssStyle.style.color = "blue";
changeCssStyle.style.fontSize = "20px";
changeCssStyle.style.fontFamily = "Arial";


function myMove() {
    var elem = document.getElementById('animate');
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 275) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}
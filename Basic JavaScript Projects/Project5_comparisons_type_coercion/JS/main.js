//Document.write() method and typeof operator
var a = "cat";
document.write(typeof a);
document.write("<br>");

//Expression combining a string and a number
document.write(25 + "14");
document.write("<br>");

//Utilizing the == operator
document.write(10==10);
document.write("<br>");

//Utilizing the === operator
b = 187;
c = 187;
document.write(b === c);
document.write("<br>");

//Utilizing the < and && operator
document.write(48 < 82 && 38 < 62);
document.write("<br>");

//Utilizing the > and || operator
document.write(48 > 82 || 38 > 62);
document.write("<br>");

//Utilizing the ! operator
function myNot(){
    document.getElementById("not").innerHTML = !(4>7);
}
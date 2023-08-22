//Addition function
function addition(){
    var a = 7+8;
    document.getElementById("Math1").innerHTML = "7+8=" + a;
}

//Subtraction function
function subtraction(){
    var b = 20-11;
    document.getElementById("Math2").innerHTML = "20-11=" + b;
}

//Multiplication function
function multiplication(){
    var c = 5*3;
    document.getElementById("Math3").innerHTML = "5*3=" + c;
}

//Division function
function division(){
    var d = 27/3;
    document.getElementById("Math4").innerHTML = "27/3=" + d;
}

//Multiple operations function
function multi_ops(){
    var e = (3+7)*4/4-2;
    document.getElementById("Math5").innerHTML = "(3+7)*4/4-2=" + e;
}

//Modulus function
function modulus_operator(){
    var f = 33%5;
    document.getElementById("Math6").innerHTML = "33%5=" + f;
}

//Negation operator function
function negation_operator(){
    var g = 254;
    document.getElementById("Math7").innerHTML = -g;
}

//Increment function
function increment(){
    var h = 6;
    h++;
    document.getElementById("Math8").innerHTML = "Increment of 6 is " + h;
}

//Decrement function
function decrement(){
    var i = 13;
    i--;
    document.getElementById("Math9").innerHTML = "Decrement of 13 is " + i;
}

//Random function
function random(){
    document.getElementById("Math10").innerHTML = Math.random()*10;
}
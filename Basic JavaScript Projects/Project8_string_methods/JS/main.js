//Utilize the concat() method
function concat(){
    var a = "This sentence ";
    var b = "is concatenated with "
    var c = "the concat() Method."
    var whole_sentence = a.concat(b, c);
    document.getElementById("sentence").innerHTML = whole_sentence;
}

//Utilize the slice() method
function slice(){
    var sentence = "Hello, World!";
    var sliced = sentence.slice(7,12);
    document.getElementById("word").innerHTML = sliced;
}

//Utilize the toString() method
function to_string(){
    var x = 234657;
    document.getElementById("number").innerHTML = x.toString();
}

//Utilize the toPrecision() method
function to_precision(){
    var y = 548.73859
    document.getElementById("length").innerHTML = y.toPrecision(5);
}
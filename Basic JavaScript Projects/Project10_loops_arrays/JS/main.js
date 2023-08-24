//While loop function
function counting(){
    var x = "";
    var y = 1;
    while (y <= 10) {
        x += "<br>" + y;
        y++;
    }
    document.getElementById("count").innerHTML = x;
}

//For loop function
var a = [10,20,30,40,50];
var b = "";
var c;
function for_loop(){
    for (c = 0; c<a.length; c++){
        b += a[c] + "<br>";
    }
    document.getElementById("list").innerHTML = b;
}

//Array function
function array(){
    var colours = [];
    colours[1] = "blue";
    colours[2] = "yellow";
    colours[3] = "red";
    colours[4] = "green";
    colours[5] = "purple";
    document.getElementById("colour").innerHTML = "The colour is " + colours[4] + "!";
}

//An object using the “let” keyword
function book(){
    let book = {
        title: "Twisted",
        author: "Emily McIntire",
        date: "2023",
    };
    document.getElementById("info").innerHTML = "The book is " + book.title + " by " + book.author + " published in " + book.date + ".";
}
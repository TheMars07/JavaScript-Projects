//Assign a local variable and a global variable
var x = 3287
function add_numbers_1(){
    var x = 2834
    document.write(20 + x + "<br>");
}

//Function with an error in it and use of the console.log() method to debug it
function add_numbers_2(){
    console.log(x);
}
add_numbers_1();
add_numbers_2();

//Write a function that includes an if and else statement
function get_grade(){
    var grade = document.getElementById("grade").value;
    if (grade > 49) {
        msg = "You passed!";
        document.getElementById("message").innerHTML = msg;
    }
    else {
        msg = "You failed!";
        document.getElementById("message").innerHTML = msg;
    }
}

//Time_function()
function Time_Function(){
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0){
        Reply = "It is morning time!";
    } else if (Time >= 12 == Time <18){
        Reply = "It is afternoon!";
    } else{
        Reply = "It is evening time!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
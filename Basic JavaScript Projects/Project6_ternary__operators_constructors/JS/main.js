//Function that utilizes a ternary operation
function vote_function(){
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age < 18) ? "You are not old enough to vote.":"You can vote!";
    document.getElementById("vote").innerHTML = can_vote;
}

//Constructor function that uses the “new” and “this” keywords
function computer(cpu, gpu, ram, motherboard){
    this.computer_cpu = cpu;
    this.computer_gpu = gpu;
    this.computer_ram = ram;
    this.computer_motherboard = motherboard;
}
var John = new computer("AMD", "Gigabyte", "16GB", "MSI");
var Sarah = new computer("Intel", "MSI", "8GB", "ASUS");
var Steve = new computer("AMD", "ASUS", "32GB", "Gigabyte");

//Function to display the results of the constructor function
function constructor_function(){
    document.getElementById("new_and_this").innerHTML = 
        "Sarah has a " + Sarah.computer_cpu + " CPU, a " + Sarah.computer_gpu + " graphics card and a " + Sarah.computer_motherboard + " motherboard."
}

//Nested function
function new_function(){
    var x = 10;
    var y = 42;
    function adding(){
        return x + y;
    }
    document.getElementById("nested_function").innerHTML = adding();
}
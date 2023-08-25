//Whose turn it is
let activePlayer = 'X';

//Store an array of moves
let selectedSquares = [];

//Placing a X or O in a square
function placeXOrO(squareNumber){
    //Ensure a square hasn't been select already
    //To see if it contains the square number clicked on
    if (!selectedSquares.some(element => element.includes(squareNumber))){
        let select = document.getElementById(squareNumber);
        //Checks player's turn
        if (activePlayer === 'X'){
            select.style.backgroundImage = 'url("./images/x.png")';
        } else {
            select.style.backgroundImage = 'url("./images/o.png")';
        }
        selectedSquares.push(squareNumber + activePlayer);
        //Function to check for any win conditions
        checkWinConditions();
        //Condition to change the active player
        if (activePlayer === 'X'){
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }
        //Function to play audio
        audio('./media/place.mp3');
        //Condition to checks if it is the computers turn
        if (activePlayer === 'O'){
            //Disable clicking on computers turn
            disableClick();
            //Function for a 1 second delay while computers plays
            setTimeout(function() {computersTurn();}, 1000);
        }
        return true;
    }
    //Function for computer to select a random square
    function computersTurn(){
        let sucess = false;
        let pickASquare;
        while (!sucess){
            pickASquare = String(Math.floor(Math.random()*9));
            if (placeXOrO(pickASquare)){
                placeXOrO(pickASquare);
                sucess = true;
            }
        }
    }
}

//Function to search for a win condition through an array
//drawWinLine() function is called to drawn a line if the condition is met
function checkWinConditions(){
    if (arrayIncludes('0X', '1X', '2X')){drawWinLine(50, 100, 558, 100)}
    else if (arrayIncludes('3X', '4X', '5X')){drawWinLine(50, 304, 558, 304)}
    else if (arrayIncludes('6X', '7X', '8X')){drawWinLine(50, 508, 558, 508)}
    else if (arrayIncludes('0X', '3X', '6X')){drawWinLine(100, 50, 100, 558)}
    else if (arrayIncludes('1X', '4X', '7X')){drawWinLine(304, 50, 304, 558)}
    else if (arrayIncludes('2X', '5X', '8X')){drawWinLine(508, 50, 508, 558)}
    else if (arrayIncludes('6X', '4X', '2X')){drawWinLine(100, 508, 510, 90)}
    else if (arrayIncludes('0X', '4X', '8X')){drawWinLine(100, 100, 520, 520)}
    else if (arrayIncludes('0O', '1O', '2O')){drawWinLine(50, 100, 558, 100)}
    else if (arrayIncludes('3O', '4O', '5O')){drawWinLine(50, 304, 558, 304)}
    else if (arrayIncludes('6O', '7O', '8O')){drawWinLine(50, 508, 558, 508)}
    else if (arrayIncludes('0O', '3O', '6O')){drawWinLine(100, 50, 100, 558)}
    else if (arrayIncludes('1O', '4O', '7O')){drawWinLine(304, 50, 304, 558)}
    else if (arrayIncludes('2O', '5O', '8O')){drawWinLine(508, 50, 508, 558)}
    else if (arrayIncludes('6O', '4O', '2O')){drawWinLine(100, 508, 510, 90)}
    else if (arrayIncludes('0O', '4O', '8O')){drawWinLine(100, 100, 520, 520)}
    //Condition to check for a tie
    else if (selectedSquares.length >= 9){
        //Function to play tie sound
        audio('./media/tie.mp3');
        //Function for a 0.3 second delay before game resets
        setTimeout(function(){resetGame();}, 500);
    }
    //Function to check each win condition
    function arrayIncludes(squareA, squareB, squareC){
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        if (a === true && b === true && c === true) {return true;}
    }
}

//Function makes body element temporarily unclickable
function disableClick(){
    body.style.pointerEvents = 'none';
    setTimeout(function(){body.style.pointerEvents = 'auto';}, 1000);
}

//Function to play audio
function audio(audioURL){
    let audio = new Audio(audioURL);
    audio.play();
}

//Function utilizes HTML canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2){
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    let x1 = coordX1,
        y1 = coordY2,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;
    //Function that interacts with the canvas
    function animateLineDrawing(){
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608);
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, 0.8)';
        c.stroke();
        if (x1 <= x2 && y1 <= y2){
            if (x < x2){x += 10;}
            if (y < y2){y += 10;}
            if (x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop);}
        }
        if (x1 <= x2 && y1 >= y2){
            if (x < x2){x += 10;}
            if (y > y2){y -= 10;}
            if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop);}
        }
    }
    //Function clears the canvas after the line is drawn
    function clear(){
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }
    //Unclickable while win sound is playing
    disableClick();
    //Plays the win sound
    audio('./media/winGame.mp3');
    //Calls the main animation loop
    animateLineDrawing();
    //Function for a 1 second delay to clear the canvas and reset the game
    setTimeout(function(){clear(); resetGame();}, 1000);
}

//Function to reset the game when there is a win or tie
function resetGame(){
    for (let i = 0; i < 9; i++){
        let square = document.getElementById(String(i));
        square.style.backgroundImage = "";
    }
    selectedSquares = [];
}
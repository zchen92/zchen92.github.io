console.log("hello")

/////////////////////////////
//////   VARIABLES    //////
///////////////////////////

let score = 0;      //initial score
let sec = 30;       //time
let myTimer;        

const $cumulativeScore = $("<h2>").html(`<span>${score}</span>`); // adding score to the h2
$(".scoreBoard").append($cumulativeScore); //adding the score to the scoreboard

let firstRandomNumber = 0;          // created first number 
const $h2 = $('<h2>').attr("id", "newVal"); 
$("#equationElement1").append($h2);
$h2.append(firstRandomNumber);

let secondRandomNumber = 0;     //created second number
const $anotherH2 = $('<h2>').attr("id", "secondNewVal");
$("#equationElement2").append($anotherH2);
$anotherH2.append(secondRandomNumber);

$startGame = $('#startGame');
$("#timer").append($startGame)

///////////////////////////////////
//////   SCORING  FUNCTION   /////
/////////////////////////////////

let addScore = () => {          
    score = score + 1           // adds one to score 
    $cumulativeScore.html(`<span>${score}</span>`)  // pushes score to score board
}

let minusScore = () => {
    score = score - 1       // subtracts one from score 
    $cumulativeScore.html(`<span>${score}</span>`) // pushes score to score board
}

/////////////////////////////////////////
/////// GENERATE RANDOM NUMBER /////////
////////////////////////////////////////

const $generateRandomNumber = (num) => {
    let randNum = Math.floor(Math.random() * (num));        // generates a random number
    return randNum
}

const $generatesNewNumber = () => {
    if (score === 20) {                             // win condition - when user score is 20, user wins
        alert("We have a winner!");                // alerts winner
        score = 0;                               // resets score to 0 once the game is over
        $cumulativeScore.html(`<span>${score}</span>`);     // pushes score to scoreboard
        $("#input-container, .equation").css("display", "none");        // hides user input so they cannot continue playing game
        clearInterval(myTimer);     //clears timer
        sec = 30                    // resets timer to 30 seconds 
    } else {
        firstRandomNumber = $generateRandomNumber(10);  // if no winner - generates another random number from 0-10 
        $("#newVal").text(firstRandomNumber);           // updated newVal to new random number generated 
        secondRandomNumber = $generateRandomNumber(10); // if no winner - generates second random number from 0-10 
        $("#secondNewVal").text(secondRandomNumber)     // updated secondNewVal to new random number generated 
    }
}


//////////////////////////////////
/////    USER INPUT FORM    //////
/////////////////////////////////


$('form').on("submit", (event) => {
    event.preventDefault();                     // prevents reload
    let userInput = $("#inputBox").val();       
    let correctAnswer = firstRandomNumber + secondRandomNumber
    if (parseInt(userInput, 10) === correctAnswer) {    // is user input matches the correct answer solution - this value is parsed from string to interger
        $("#inputBox").val('');     // clears user input 
        addScore();                 // if answer is correct, adds a point by running addScore function
    } else {
        minusScore();           // if condition is not met (answer is incorrect), subtract a point by running minusScore function
    }
    $generatesNewNumber();          // rerun generateNewNumber function to see if win condition has been met, if not reset random values
    $(event.currentTarget).trigger('reset');    //resets form

});


//////////////////////////
///////   TIMER   ////////
/////////////////////////

let timer = () => {
    document.getElementById('timerDisplay').innerHTML = '' + sec;
    sec--;
    if (sec < 0) {                  //// if time is <0 seconds
        clearInterval(myTimer);             //clear timer
        $("#input-container, .equation").css("display", "none");        //hides user input so they cannot keep playing
        alert("Game Over");     // Lose Condition
        score = 0;          //reset score to zero
        sec = 30;           // resets time to 30 seconds 
        $cumulativeScore.html(`<span>${score}</span>`);             //updates element that holds score html and set to 0 
        $generatesNewNumber()       //generates numbers again to restart game
    }
};

const startTimer = () => {
    myTimer = setInterval(timer, 1000)     // initiates time 
}

///////////////////////////////////////
//////   START GAME FUNCTION    //////
/////////////////////////////////////

const $begin = () => {
    $("#input-container, .equation").css("display", "flex");        // once game begins, user input box appears
    startTimer();                                                   // calling function to start timer
    $generatesNewNumber()                                           // new numbers generated
}

//////////////////////////
///////  ONLOAD   ///////
/////////////////////////

$(() => {


    $startGame.on('click', $begin);         // user clicks start game button, triggers begin function


})
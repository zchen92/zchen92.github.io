console.log("hello")

/////////////////////////////
//////   VARIABLES    //////
///////////////////////////

let score = 0;
let sec = 60;           // timer for division game is 60 seconds 
let myTimer;

const $cumulativeScore = $("<h2>").html(`<span>${score}</span>`);
$(".scoreBoard").append($cumulativeScore);

let firstRandomNumber = 0;
const $h2 = $('<h2>').attr("id", "newVal");
$("#equationElement1").append($h2);
$h2.append(firstRandomNumber);

let secondRandomNumber = 0;
const $anotherH2 = $('<h2>').attr("id", "secondNewVal");
$("#equationElement2").append($anotherH2);
$anotherH2.append(secondRandomNumber);

$startGame = $('#startGame');
$("#timer").append($startGame)

///////////////////////////////////
//////   SCORING  FUNCTION   /////
/////////////////////////////////

let addScore = () => {
    score = score + 1
    $cumulativeScore.html(`<span>${score}</span>`)
}

let minusScore = () => {
    score = score - 1
    $cumulativeScore.html(`<span>${score}</span>`)
}

/////////////////////////////////////////
/////// GENERATE RANDOM NUMBER /////////
////////////////////////////////////////

const $generateRandomNumber = (num) => {
    let randNum = Math.floor(Math.random() * (num)); // generates a random number (between 0 - num)
    return randNum
}

const $generateSecondNumber = (min, max) => {
    let secondNum = Math.floor(Math.random() * ((max - min + 1) + min)); // generates a new number between certain values, did this avoid dividing by zero 
    if (secondNum === 0) {
        $generateRandomNumber
    }
    return secondNum
}

const $generatesNewNumber = () => {
    if (score === 20) {
        alert("We have a winner!");
        score = 0;
        $cumulativeScore.html(`<span>${score}</span>`);
        $("#input-container, .equation").css("display", "none");
        clearInterval(myTimer);
        sec = 60
    } else {
        firstRandomNumber = $generateRandomNumber(10);
        $("#newVal").text(firstRandomNumber);
        secondRandomNumber = $generateSecondNumber(2,10);
        $("#secondNewVal").text(secondRandomNumber)
    }
}

//////////////////////////////////
/////    USER INPUT FORM    //////
/////////////////////////////////


$('form').on("submit", (event) => {
    event.preventDefault();
    let userInput = $("#inputBox").val();
    let correctAnswer = firstRandomNumber / secondRandomNumber
    //$generatesNewNumber()
    if (eval(userInput, 10) === correctAnswer) {        // changed from parse to eval so response can be a string, this way response can be fractions/decimals w/o getting incorrect answer
        $("#inputBox").val('');
        addScore();
    } else {
        minusScore();
    }
    $generatesNewNumber();
    $(event.currentTarget).trigger('reset');

});


//////////////////////////
///////   TIMER   ////////
/////////////////////////

let timer = () => {
    document.getElementById('timerDisplay').innerHTML = '' + sec;
    sec--;
    if (sec < 0) {
        clearInterval(myTimer);
        $("#input-container, .equation").css("display", "none");
        alert("Game Over");
        score = 0;
        sec = 60;
        $cumulativeScore.html(`<span>${score}</span>`);
        $generatesNewNumber()
    }
};

const startTimer = () => {
    myTimer = setInterval(timer, 1000)
}

///////////////////////////////////////
//////   START GAME FUNCTION    //////
/////////////////////////////////////

const $begin = () => {
    $("#input-container, .equation").css("display", "flex");
    startTimer();
    $generatesNewNumber()
}

//////////////////////////
///////  ONLOAD   ///////
/////////////////////////

$(() => {

    $startGame.on('click', $begin);

})
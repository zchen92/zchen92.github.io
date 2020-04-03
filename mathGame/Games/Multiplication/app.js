console.log("hello")


/////////////////////////////////////////
/////// GENERATE RANDOM NUMBER /////////
////////////////////////////////////////

let score = 0

const $cumulativeScore = $("<h2>").html(`<span>${score}</span>`)
$(".scoreBoard").append($cumulativeScore) 

let addScore = () =>{
    score = score + 1
    $cumulativeScore.html(`<span>${score}</span>`)
} 

let minusScore = () =>{
    score = score - 1
    $cumulativeScore.html(`<span>${score}</span>`)
}

let firstRandomNumber = 0;
const $h2 = $('<h2>').attr("id","newVal");
$("#equationElement1").append($h2);
$h2.append(firstRandomNumber)

let secondRandomNumber= 0;
const $anotherH2 = $('<h2>').attr("id", "secondNewVal");
$("#equationElement2").append($anotherH2);
$anotherH2.append(secondRandomNumber);

const $generateRandomNumber = (num) => {
    let randNum = Math.floor(Math.random()*(num));
    return randNum
}

console.log($generateRandomNumber(10))

const $generatesNewNumber = () => {
    if (score === 20) {
        alert("We have a winner!");
        score = 0;
        $cumulativeScore.html(`<span>${score}</span>`);
        $("#input-container, .equation").css("display", "none")
        clearInterval(myTimer);
        sec = 45
    } else {
        firstRandomNumber = $generateRandomNumber(10);
        $("#newVal").text(firstRandomNumber)
        secondRandomNumber = $generateRandomNumber(10)
        $("#secondNewVal").text(secondRandomNumber)
    }
}

$('form').on("submit", (event) => {
    event.preventDefault(); 
    let userInput = $("#inputBox").val();
    let correctAnswer = firstRandomNumber * secondRandomNumber
    if (parseInt(userInput,10) === correctAnswer) {  
        $("#inputBox").val(''); 
        addScore();
    } else {
        minusScore();
    }
    $generatesNewNumber()
    $(event.currentTarget).trigger('reset'); 
});


//////////////////////////
//////   SCORING    /////
/////////////////////////



//////////////////////////
///////   TIMER   ////////
/////////////////////////
let sec = 345;
let myTimer; 


let timer = () => {
    document.getElementById('timerDisplay').innerHTML=''+sec;
    sec--;
    if (sec < 0) {
        clearInterval(myTimer);
        $("#input-container, .equation").css("display", "none")
        alert("Game Over");
        score = 0;
        sec = 45
        //element that holds score html and set to 0 
        $cumulativeScore.html(`<span>${score}</span>`)
        $generatesNewNumber()
    }
};

const startTimer = () => {
  
    myTimer = setInterval(timer,1000)
    
} 

const $begin = () => {
    $("#input-container, .equation").css("display", "flex")
    startTimer();
    $generatesNewNumber()
}

$startGame= $('#startGame');
$("#timer").append($startGame)
    
//////////////////////////
///////  ONLOAD   ///////
/////////////////////////
$(() => {

    
    $startGame.on('click', $begin);    


})

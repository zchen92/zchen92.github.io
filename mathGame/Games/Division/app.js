console.log("hello")

let score = 0

const $cumulativeScore = $("<h2>").html(`<span>${score}</span>`)
$("<h2>").css("text-align", "center"); //doesnt work...
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

const $generateSecondNumber = (min, max) => {
    let secondNum = Math.floor(Math.random() * (max - min)+min);
    return secondNum
}

console.log($generateRandomNumber(5))

const $generatesNewNumber = () => {
    if (score === 20) {
        alert("We have a winner!");

    } else {
        firstRandomNumber = $generateRandomNumber(10);
        $("#newVal").text(firstRandomNumber)
        secondRandomNumber = $generateSecondNumber(4,1)
        $("#secondNewVal").text(secondRandomNumber)
    }
}

$('form').on("submit", (event) => {
    event.preventDefault(); 
    let userInput = $("#inputBox").val();
    let correctAnswer = firstRandomNumber / secondRandomNumber
    //$generatesNewNumber()
    if (eval(userInput,10) === correctAnswer) {  
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
const startTimer = () => {
    let sec = 60;
    let timer = setInterval(function(){
        document.getElementById('timerDisplay').innerHTML=''+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            alert("Game Over");
            $generatesNewNumber() === false
        }
    }, 1000);
} // create function with button to start timer - 1Minute/2Minutes/3M 


const $begin = () => {
    startTimer();
    $generatesNewNumber()
}

$startGame= $('#startGame');
$("#timer").append($startGame)

    
//////////////////////////
///////  ONLOAD   ///////
/////////////////////////
$(() => {

    
    $startGame.on('click', $begin);      // need to start loop for random numbers too...

    // Grabbing About the Game button
    const $openBtn = $('#openModal');
    const $modal = $('#modal');
    const $closeBtn = $('#close');
    
    const openModal = () => {
        $modal.css('display', 'block');
    }
    
    const closeModal = () => {
        $modal.css('display', 'none');
    }
    
    $openBtn.on('click', openModal);
    $closeBtn.on('click', closeModal)


})

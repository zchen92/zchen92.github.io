console.log("hello")


/////////////////////////////////////////
/////// GENERATE RANDOM NUMBER /////////
////////////////////////////////////////

let firstRandomNumber = Math.floor(Math.random()*(10));
const $h2 = $('<h2>');
$("#equationElement1").append($h2);
$h2.append(firstRandomNumber)

let secondRandomNumber = Math.floor(Math.random()*(10));
const $anotherH2 = $('<h2>');
$("#equationElement2").append($anotherH2);
$anotherH2.append(secondRandomNumber)

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

const $generatesNewNumber = () => {
    if ($cumulativeScore === 20) {
        alert ("We have a winner")
    } else {
        firstRandomNumber
        secondRandomNumber
    }
}

$('form').on("submit", (event) => {
    event.preventDefault(); 
    let userInput = $("#inputBox").val();
    let correctAnswer = firstRandomNumber + secondRandomNumber
    console.log(correctAnswer)
    console.log(userInput)
    if (parseInt(userInput,10) === correctAnswer) {
        console.log(correctAnswer);    
        $("#inputBox").val(''); 
        addScore();
        $generatesNewNumber()
    } else {
        minusScore();
        $generatesNewNumber()
    }
    $(event.currentTarget).trigger('reset'); 
});


//////////////////////////
//////   SCORING    /////
/////////////////////////



//////////////////////////
///////   TIMER   ////////
/////////////////////////
// const startTimer = () => {
//     let sec = 30;
//     let timer = setInterval(function(){
//         document.getElementById('timerDisplay').innerHTML='00:'+sec;
//         sec--;
//         if (sec < 0) {
//             clearInterval(timer);
//             alert("Game Over")
//         }
//     }, 1000);
// } // create function with button to start timer - 1Minute/2Minutes/3M 

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}


$startGame= $('#startGame');
$("#time").append($startGame)

////////////////////
////// TABS ///////
//////////////////

// $('#tabs li a:not(:first)').addClass('inactive');
// $('.container').hide();
// $('.container:first').show();
    
// $('#tabs li a').click(function(){
//     var t = $(this).attr('id');
//   if($(this).hasClass('inactive')){ //this is the start of our condition 
//     $('#tabs li a').addClass('inactive');           
//     $(this).removeClass('inactive');
    
//     $('.container').hide();
//     $('#'+ t + 'C').fadeIn('slow');
//  }
// });


//////////////////////////
///////  ONLOAD   ///////
/////////////////////////
$(() => {

    
    $startGame.on('click', startTimer());      // need to start loop for random numbers too...

    

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

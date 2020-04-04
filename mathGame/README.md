# Countless Countdown

<<<<<<< HEAD
=======
![heading logo](/mathGame/Images/clockImage.png)
>>>>>>> c141fe17d91fa5a65e419b90081fea6c696d3ee5

## Concept 

Countless Countdown is a game that challenges users to practice their basic math knowledge in a competitive yet fun manner. This game is designed to increase in difficulty with each  (basic math operation, but the user will also have more time to solve each problem. The user must reach 20 points before the time runs out. 

## Technologies used
1. HTML
2. CSS
3. Javascript
4. JQuery

## Approach
### Wireframe 

Once I finalized on my idea, I created the HTMl with the different div classes for each element I wanted on the page). I created four tabs for each math operation, in addition to the main header and footer image. There is also a modal that allows user to learn the game rules. I placed each game into an iFrame to break up my code. I started my game with the Addition problem. I created a button for the user to start the game, which triggers the timer to start and two random numbers to generate, using javascript and jquery functions. The game score is initially set to zero. The user is able to put their response into the input option and submit using the "enter" button. I initially had a submit button but realized this would be too time consuming for the user if they had to move their mouse with each submission. Once the response is submitted, there is a function to determine if the response if correct or incorrect. If the response was corrent, the score would add one to the base score of 0. If the response was incorrect, the score would subtract 1 fom the initial score. The numbers would regenerate until the time either runs out (alerting user the game is over) or until the user reaches 20 points (alerting user they won). Once the game is either won or lost, the input option is hidden, to prevent th user from continuing the game. The user must then continue by hitting the "start game" button again. 

For the subtraction and multiplication tab - I increased the users time to complete the game from 30 seconds to 45 seconds to complete the game as these operations can be more challenging. 

For the division tab - I increased the users time complete the game to 60 seconds. I also changed the random number generator function so that the second number generated cannot be a 0, as to avoid "error" in division. Lastly, instead of parsing the intergers, I used the "eval" option so that the user is able to submit fractions and decimals without the response being incorrect. 


## Challenges
* I initially tried to add images of apples to make the game more kid friendly. The idea was to have the user get two images of apples, and find the solution from an array of three images. However, I realized based on the time I was giving the user, it would be difficult to count all the apples quickly. Additionally, based on the screen size, it would be hard to get all the images into one row. Lastly, this would have only been applicable to the array of images I had used, and could not further expand into other math operations/problems. 


* Creating the different tabs was very challenging as I initially tried to put all the code for each tab under each section. This became a very large JS file with very similar code in each section. I was able to break it apart by putting each game into a separate iFrame. 

* I ran out of time to add sound to the game once the clock starts and to complete the responsive design.

## Additional information

## App Demo 
Please take a look at my project 
[Countless Countdown](https://zchen92.github.io/mathGame/)

## Acknowledgements 
Big thanks to Madeline O'moore, Bruno DaSilva, Arthur Bernier Jr, and "Nando" Tavarez with helping me put this game together.







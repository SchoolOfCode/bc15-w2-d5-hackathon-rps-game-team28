let playerChoice = "";
let computerChoice = "";
let playerScore = 0;
let computerScore = 0;
let secondPlayerChoice = "";
let secondPlayerScore = 0;

//above we have declared variables
function gameStart(){
    let gameModeChoice = prompt("Would you like to play 1 player or 2 player?");

    if (gameModeChoice === 1){
        while (computerScore || playerScore !== 3){
            playerChoice = prompt("Please choose: Rock, Paper or Scissors");
            console.log(playerChoice.toLowerCase());
            // above is to take the players choice
            computerChoice = Math.floor(Math.random() * 3 + 1);
            if (computerChoice === 1){
                computerChoice = "rock";
                console.log("Computer picks Rock");
            } else if (computerChoice === 2){
                computerChoice = "paper";
                console.log("Computer picks paper");
            } else if (computerChoice === 3){
                computerChoice = "scissors";
                console.log("Computer picks scissors");
            };
            //above is the computer choice
            if (playerChoice === computerChoice){
                console.log(`It's a draw, try again! Your score is ${playerScore} and the computers score is ${computerScore}`)
            //aboce is if a draw out put same choice 
        } else  if(playerChoice === "rock" && computerChoice === "scissors" 
            || playerChoice === "scissors" && computerChoice === "paper" 
            || playerChoice === "paper" && computerChoice === "rock"){
                playerScore ++;
                console.log(`You won that round. Your score is ${playerScore} and the computers score is ${computerScore}`);
            }
            //above is if player wins
            else {
                computerScore ++;
                console.log(`Computer won that round. Computer score is ${computerScore} and your score is ${playerScore}`);
            }
            //above is computer wins 
        
            if (computerScore === 3){
                console.log("Computer won")
                break;
            } else if (playerScore === 3){
                console.log("Player won")
                break;
            }
        }
    }
    if (gameModeChoice === 2){
        while (playerScore || secondPlayerScore !== 3){
            playerChoice = prompt("Please choose: Rock, Paper or Scissors");
            console.log(playerChoice.toLowerCase());
            // above is to take the players choice
            secondPlayerChoice = prompt("Please choose: Rock, Paper or Scissors");
            console.log(playerChoice.toLowerCase());

            
            if (secondPlayerChoice === 1){
                secondPlayerChoice = "rock";
                console.log("Player 2 picks Rock");
            } else if (secondPlayerChoice === 2){
                secondPlayerChoice = "paper";
                console.log("Player 2 picks paper");
            } else if (secondPlayerChoice === 3){
                secondPlayerChoice = "scissors";
                console.log("Player 2 picks scissors");
            };
            //above is the computer choice
            if (playerChoice === secondPlayerChoice){
                console.log(`It's a draw, try again! Your score is ${playerScore} and the Player 2 score is ${secondPlayerScore}`)
            //aboce is if a draw out put same choice 
        } else  if(playerChoice === "rock" && secondPlayerChoice === "scissors" 
            || playerChoice === "scissors" && secondPlayerChoice === "paper" 
            || playerChoice === "paper" && secondPlayerChoice === "rock"){
                playerScore ++;
                console.log(`You won that round. Player 1 score is ${playerScore} and the Player 2 score is ${secondPlayerScore}`);
            }
            //above is if player wins
            else {
                secondPlayerScore ++;
                console.log(`Player 2 won that round. Player 2 score is ${secondPlayerScore} and Player 1 score is ${playerScore}`);
            }
            //above is computer wins 
        
            if (scecondPlayerScore === 3){
                console.log("Player 2 has won")
                break;
            } else if (playerScore === 3){
                console.log("Player 1 won")
                break;
            }
        }
    }

}

gameStart();
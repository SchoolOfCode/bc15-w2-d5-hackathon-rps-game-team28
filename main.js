let playerChoice = "";
let computerChoice = "";
let playerScore = 0;
let computerScore = 0;
let secondPlayerChoice = "";
let secondPlayerScore = 0;
let playerName = "";
let playerTwoName = "";

//above we have declared variables
function gameStart(){
    let gameModeChoice = confirm("If you are playing alone press OK! If not press CANCEL!");
    let gameModeLength = prompt("Do you want to play up to the score of 3 or 5?");
   

    if (gameModeChoice == true){
        playerName = prompt("What is your name?")
        while (computerScore || playerScore !== 3){
            playerChoice = prompt("Please choose: Rock, Paper or Scissors");
            console.log(playerChoice.toLowerCase());
           // Ensures correct spelling
           /*
            if (playerChoice !== "rock" || "Rock" && playerChoice !== "paper" || "Paper" && playerChoice !== "scissors" || "Scissors"){
                alert("Wrong Input, check your spelling!")
                continue;
            }
            */
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
                console.log(`It's a draw, try again! ${playerName}'s is ${playerScore} and the computers score is ${computerScore}`)
            //aboce is if a draw out put same choice 
        } else if(playerChoice === "rock" && computerChoice === "scissors" 
            || playerChoice === "scissors" && computerChoice === "paper" 
            || playerChoice === "paper" && computerChoice === "rock"){
                playerScore ++;
                console.log(`You won that round. ${playerName}'s is ${playerScore} and the computers score is ${computerScore}`);
            }
            //above is if player wins
            else {
                computerScore ++;
                console.log(`Computer won that round. Computer score is ${computerScore} and ${playerName}'s is ${playerScore}`);
            }
            //above is computer wins 


            if (gameModeLength == 3){
        
            if (computerScore === 3){
                console.log("Computer won")
                break;
            } else if (playerScore === 3){
                console.log(`${playerName} won`)
                break;
    
            }}
            if (gameModeLength == 5){
        
                if (computerScore === 5){
                    console.log("Computer won")
                    break;
                } else if (playerScore === 5){
                    console.log(`${playerName}`)
                    break;
        }
    }    
    }}  
    
    if (gameModeChoice == false){
        playerName = prompt("What is player 1's name?");
            alert(`Hello ${playerName}`);
        playerTwoName = prompt("What is player 2's name?");
            alert(`Hello ${playerTwoName}`);    

        while (playerScore || secondPlayerScore !== 3){
            playerChoice = prompt(`${playerName}, Please choose: Rock, Paper or Scissors`);
            console.log(playerChoice.toLowerCase());
            // above is to take the players choice
            secondPlayerChoice = prompt(`${playerTwoName}, Please choose: Rock, Paper or Scissors`);
            console.log(secondPlayerChoice.toLowerCase());
/*  Ensures right spelling of inputs
            if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors"){
                alert("Wrong input, check your spelling!")
            } else if (secondPlayerChoice !== "rock" && secondPlayerChoice !== "paper" && secondPlayerChoice !== "scissors"){
                alert("Wrong input, check your spelling!");
            }
*/          
            if (secondPlayerChoice === 1){
                secondPlayerChoice = "rock";
                console.log(`${playerTwoName} picks Rock`);
            } else if (secondPlayerChoice === 2){
                secondPlayerChoice = "paper";
                console.log(`${playerTwoName} picks paper`);
            } else if (secondPlayerChoice === 3){
                secondPlayerChoice = "scissors";
                console.log(`${playerTwoName} picks scissors`);
            };
            //above is the computer choice
            if (playerChoice === secondPlayerChoice){
                console.log(`It's a draw, try again! ${playerName}'s choice is ${playerScore} and the ${playerTwoName}'s score is ${secondPlayerScore}`)
            //aboce is if a draw out put same choice 
        } else if(playerChoice === "rock" && secondPlayerChoice === "scissors" 
            || playerChoice === "scissors" && secondPlayerChoice === "paper" 
            || playerChoice === "paper" && secondPlayerChoice === "rock"){
                playerScore ++;
                console.log(`${playerName} won that round. ${playerName}'s score is ${playerScore} and the ${playerTwoName}'s score is ${secondPlayerScore}`);
            }
            //above is if player wins
            else {
                secondPlayerScore ++;
                console.log(`${playerTwoName} won that round. ${playerTwoName}'s score is ${secondPlayerScore} and ${playerName} score is ${playerScore}`);
            }
            //above is computer wins 
        
            if (gameModeLength == 3){
        
                if (secondPlayerScore === 3){
                    console.log(`${playerTwoName} won`)
                    break;
                } else if (playerScore === 3){
                    console.log("Player won")
                    break;
        
                }}
                if (gameModeLength == 5){
            
                    if (secondPlayerScore === 5){
                        console.log(`${playerTwoName} won`)
                        break;
                    } else if (playerScore === 5){
                        console.log(`${playerName} won`)
                        break;
            }
    }
}}}
        
gameStart()
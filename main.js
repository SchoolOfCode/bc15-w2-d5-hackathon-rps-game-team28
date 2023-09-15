let playerChoice = "";
let computerChoice = "";
let playerScore = 0;
let computerScore = 0;
//above we have declared variables
function gameStart(){
    /*(let gameModeChoice = prompt("Choose Game mode. Best of 3 or 5?");
    console.log(gameModeChoice)
    */
for (i = 0; i <= 2; i++){
    playerChoice = prompt("Please choose: Rock, paper or scissors");
    console.log(playerChoice.toLowerCase());
    // above is to take the players choice
    computerChoice = Math.floor(Math.random() * 3 + 1);
    console.log(computerChoice);
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
        console.log("Same choice try")
    //aboce is if a draw out put same choice 
} else if(playerChoice === "rock" && computerChoice === "scissors" 
    || playerChoice === "scissors" && computerChoice === "paper" 
    || playerChoice === "paper" && computerChoice === "rock"){
        playerScore ++;
        console.log(`You won that round. Your score is ${playerScore}`);
    }
    //above is if player wins
    else {
        computerScore ++;
        console.log(`Computer won that round. Computer score is ${computerScore}`);
    }
    //above is computer wins 
}
}

gameStart();
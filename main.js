let playerChoice = "";
let computerChoice = "";
let playerScore = 0;
let computerScore = 0;

function gameStart(){
    /*(let gameModeChoice = prompt("Choose Game mode. Best of 3 or 5?");
    console.log(gameModeChoice)
    */

    playerChoice = prompt("Please choose: 1.Rock, 2.paper or 3.scissors");
    console.log(playerChoice.toLowerCase());
    
    computerChoice = Math.floor(Math.random() * 3 + 1);
    console.log(computerChoice);
    if (computerChoice === 1){
        console.log("Computer picks Rock");
    } else if (computerChoice === 2){
        console.log("Computer picks paper");
    } else if (computerChoice === 3){
        console.log("Computer picks rock");
    };

    if (playerChoice == computerChoice){
        console.log("Same choice try")
    } else if(playerChoice === "rock" && computerChoice === "scissors"){
            console.log("You won that round")
        } else if(playerChoice === "scissors" && computerChoice === "paper"){
            console.log("You won that round")
        } else if(playerChoice === "paper" && computerChoice === "rock"){
            console.log("You won that round")
        }
    
}

gameStart();
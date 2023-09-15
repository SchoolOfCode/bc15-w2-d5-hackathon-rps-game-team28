let playerChoice = "";
let computerChoice = "";
let playerScore = 0;
let computerScore = 0;

function gameStart(){
    /*(let gameModeChoice = prompt("Choose Game mode. Best of 3 or 5?");
    console.log(gameModeChoice)
    */

    playerChoice = prompt("Please choose: Rock, paper or scissors");
    console.log(playerChoice.toLowerCase());
    
        computerChoice = Math.floor(Math.random() * 3 + 1);
        console.log(computerChoice);
        if (computerChoice === 1){
            console.log("Computer picks Scissors");
        } else if (computerChoice === 2){
            console.log("Computer picks Paper");
        } else if (computerChoice === 3){
            console.log("Computer picks Rock");
        };

        if (playerChoice === computerChoice){
            console.log("Same choice try")
        }
}

gameStart();
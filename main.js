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
        computerChoice = "rock";
        console.log("Computer picks Rock");
    } else if (computerChoice === 2){
        computerChoice = "paper";
        console.log("Computer picks paper");
    } else if (computerChoice === 3){
        computerChoice = "scissors";
        console.log("Computer picks scissors");
    };

    if (playerChoice === computerChoice){
        console.log("Same choice try")

} 
    if(playerChoice === "rock" && computerChoice === "scissors"){
            console.log("You won that round")
    }
    else {console.log('Computer wins')
    }



    if(playerChoice === "scissors" && computerChoice === "paper"){
            console.log("You won that round")
    } 
    else { (console.log('Computer wins'))
 } 
 
    if(playerChoice === "paper" && computerChoice === "rock")
    {
            console.log("You won that round")
        }
    else { (console.log)('Computer wins')
    }}
    


gameStart();
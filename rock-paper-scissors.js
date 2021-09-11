alert("run game() in console to start playing!");

function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    //Return a random option inside the options array
    return options[Math.floor(Math.random()*options.length)];
}

function playRound(playerSelection, computerSelection) {
    //Switch based on computerSelection
    switch (computerSelection) {
        case "rock":
            if (playerSelection.localeCompare("rock", undefined, { sensitivity: 'base' }) == 0) {
                console.log("It's a draw!");
                return 2;
            } 
            if (playerSelection.localeCompare("paper", undefined, { sensitivity: 'base' }) == 0) {
                console.log("You win! Paper beats Rock");
                return 1;
            }  
            if (playerSelection.localeCompare("scissors", undefined, { sensitivity: 'base' }) == 0) {
                console.log("You Lose! Rock beats Scissors");
                return 0;
            }  
            break;

        case "paper":
            if (playerSelection.localeCompare("rock", undefined, { sensitivity: 'base' }) == 0) {
                console.log("You Lose! Paper beats Rock");
                return 0;
            } 
            if (playerSelection.localeCompare("paper", undefined, { sensitivity: 'base' }) == 0) {
                console.log("It's a draw!");
                return 2;
            }  
            if (playerSelection.localeCompare("scissors", undefined, { sensitivity: 'base' }) == 0) {
                console.log("You win! Scissors beats Paper");
                return 1;
            }  
            break;

        case "scissors":
            if (playerSelection.localeCompare("rock", undefined, { sensitivity: 'base' }) == 0) {
                console.log("You win! Rock beats Scissors");
                return 1;
            } 
            if (playerSelection.localeCompare("paper", undefined, { sensitivity: 'base' }) == 0) {
                console.log("You lose! Scissors beats Paper");
                return 0;
            }  
            if (playerSelection.localeCompare("scissors", undefined, { sensitivity: 'base' }) == 0) {
                console.log("It's a draw!");
                return 2;
            }  
            break;
    }
}

function game() {
    //The best of 3 wins
    let playerWins = 0;
    let computerWins = 0;
    let playerInput;
    let result;

    while(playerWins != 3 && computerWins != 3){
        playerInput = prompt("Choose: Rock, Paper or Scissors");
        result = playRound(playerInput,computerPlay());
        //If Player loss
        if(result == 0){
            computerWins = computerWins + 1;
        }
        //If Player won
        if(result == 1){
            playerWins = playerWins + 1;
        }
        //Draw don't do anything
    }
    if(playerWins == 3){
        console.log("Congratulations, you won !");
    } else {
        console.log("You lost, computer won !");
    }
}
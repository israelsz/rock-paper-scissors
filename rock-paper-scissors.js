//Functions

function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    //Return a random option inside the options array
    return options[Math.floor(Math.random()*options.length)];
}


function playRound(playerSelection, computerSelection) {
    //Switch based on computerSelection
    switch (computerSelection) {
        case "rock":
            setTimeout(function(){ computerRock.classList.add("computerSelected") }, 2);

            if (playerSelection == "rock") {
                setTimeout(function(){ playerRock.classList.add("playerSelected") }, 2);
                textInfo.textContent = "It's a draw!";
                playerRock.classList.remove("playerSelected");
                computerRock.classList.remove("computerSelected");
                return 2;
            } 
            if (playerSelection == "paper") {
                setTimeout(function(){ playerPaper.classList.add("playerSelected") }, 2);
                textInfo.textContent = "You win! Paper beats Rock";
                playerPaper.classList.remove("playerSelected");
                computerRock.classList.remove("computerSelected");
                return 1;
            }  
            if (playerSelection == "scissors") {
                setTimeout(function(){ playerScissors.classList.add("playerSelected") }, 2);
                textInfo.textContent = "You Lose! Rock beats Scissors";
                playerScissors.classList.remove("playerSelected");
                computerRock.classList.remove("computerSelected");
                return 0;
            }  
            break;

        case "paper":
            setTimeout(function(){ computerPaper.classList.add("computerSelected") }, 2);
            
            if (playerSelection == "rock") {
                setTimeout(function(){ playerRock.classList.add("playerSelected") }, 2);
                textInfo.textContent = "You Lose! Paper beats Rock";
                playerRock.classList.remove("playerSelected");
                computerPaper.classList.remove("computerSelected");
                return 0;
            } 
            if (playerSelection == "paper") {
                setTimeout(function(){ playerPaper.classList.add("playerSelected") }, 2);
                textInfo.textContent = "It's a draw!";
                playerPaper.classList.remove("playerSelected");
                computerPaper.classList.remove("computerSelected");
                return 2;
            }  
            if (playerSelection == "scissors") {
                setTimeout(function(){ playerScissors.classList.add("playerSelected") }, 2);
                textInfo.textContent = "You win! Scissors beats Paper";
                playerScissors.classList.remove("playerSelected");
                computerPaper.classList.remove("computerSelected");
                return  1;
            }  
            break;

        case "scissors":
            setTimeout(function(){ computerScissors.classList.add("computerSelected") }, 2);

            if (playerSelection == "rock") {
                setTimeout(function(){ playerRock.classList.add("playerSelected") }, 2);
                textInfo.textContent = "You win! Rock beats Scissors";
                playerRock.classList.remove("playerSelected");
                computerScissors.classList.remove("computerSelected");
                return 1;
            } 
            if (playerSelection == "paper") {
                setTimeout(function(){ playerPaper.classList.add("playerSelected") }, 2);
                textInfo.textContent = "You lose! Scissors beats Paper";
                playerPaper.classList.remove("playerSelected");
                computerScissors.classList.remove("computerSelected");
                return 0;
            }  
            if (playerSelection == "scissors") {
                setTimeout(function(){ playerScissors.classList.add("playerSelected") }, 2);
                textInfo.textContent = "It's a draw!";
                playerScissors.classList.remove("playerSelected");
                computerScissors.classList.remove("computerSelected");
                return 2;
            }  
            break;
    }
}

function playGame(userChoice){
    if(gameOver() === true){
        displayFinalMessage();
        return;
    }
    //Play a round
    result = playRound(userChoice,computerPlay());

    //If loss
    if(result === 0){
        bonkAudio.play();
        playerImg.setAttribute("src","images/cheemsBonk.jpg");
        bonkAudio.play();

        computerWins = computerWins + 1;
        computerScore.textContent = `Computer: ${computerWins}`;

        setTimeout(function(){
            playerImg.setAttribute("src","images/cheems.jpg");
        }, 1000);
    }
    //If wins
    if(result === 1){
        bonkAudio.play(); //Plays the bonk audio
        computerImg.setAttribute("src","images/ratBonk.jpg"); //Bonks the computer

        playerWins = playerWins + 1;
        playerScore.textContent = `You: ${playerWins}`;

        setTimeout(function(){
            computerImg.setAttribute("src","images/ratGun.jpg");
        }, 1000);
    }

    if(gameOver() === true){
        displayFinalMessage();
        return;
    }
    return;
}

function gameOver(){
    if(playerWins === 5 || computerWins ===5){
        return true;
    }
    return false;
}

function displayFinalMessage(){
    if(playerWins === 5){
        finalText.textContent = "Congratulations you won!";
    } else {
        finalText.textContent = "Rat won, you lost!";
    }
    endGameBackground.classList.add("gameOverBackground");
    endMessage.classList.add("gameOverMessage");
}



//References
const playerRock = document.querySelector("#playerRock");
const playerPaper = document.querySelector("#playerPaper");
const playerScissors = document.querySelector("#playerScissors");

const computerRock = document.querySelector("#computerRock");
const computerPaper = document.querySelector("#computerPaper");
const computerScissors = document.querySelector("#computerScissors");

const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");

const textInfo = document.querySelector("#info");

const computerImg = document.querySelector(".ratImage");
const playerImg = document.querySelector(".cheemsImage");

const bonkAudio = document.querySelector("#bonkAudio");

const endMessage = document.querySelector(".endMessage");
const endGameBackground = document.querySelector(".backgroundEndGame");
const restartButton = document.querySelector("#restartButton");
const finalText = document.querySelector("#finalText");

//Game variables
let playerWins = 0;
let computerWins = 0;
let result;

//Event listeners
playerRock.addEventListener('click', () => {
    playGame("rock");
});

playerPaper.addEventListener('click', () => {
    playGame("paper");
});

playerScissors.addEventListener('click',() => {
    playGame("scissors");
});

//For changing buttons style:
computerRock.addEventListener("transitionend", () => {computerRock.classList.remove("computerSelected")});
computerPaper.addEventListener("transitionend", () => {computerPaper.classList.remove("computerSelected")});
computerScissors.addEventListener("transitionend", () => {computerScissors.classList.remove("computerSelected")});

playerRock.addEventListener("transitionend", () => {playerRock.classList.remove("playerSelected")});
playerPaper.addEventListener("transitionend", () => {playerPaper.classList.remove("playerSelected")});
playerScissors.addEventListener("transitionend", () => {playerScissors.classList.remove("playerSelected")});

//Restart the game
restartButton.addEventListener("click", () => {
    playerWins = 0;
    computerWins = 0;
    result = null;
    endGameBackground.classList.remove("gameOverBackground");
    endMessage.classList.remove("gameOverMessage");
    textInfo.textContent = "You are Cheems, start playing!";
    computerScore.textContent = `Computer: ${computerWins}`;
    playerScore.textContent = `You: ${playerWins}`;
});


// -----Project: Rock Paper Scissors-----

//Initialize the game
let playerScore = 0;
let computerScore = 0;
const gameWinner = document.querySelector('#result');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        let result = playRound(e.target.id);
        if (result === "player") {
            playerScore++;
            document.getElementById('player-score').innerText = `Player: ${playerScore}`;
        } else if (result === "computer") {
            computerScore++;
            document.getElementById('computer-score').innerText = `Computer: ${computerScore}`;
        } else {
            document.getElementById('player-score').innerText = `Player: ${playerScore}`;
            document.getElementById('computer-score').innerText = `Computer: ${computerScore}`;
        }

        //Whoever got 5 first will be the winner and the score will be reset
        if (playerScore === 5) {
            gameWinner.innerText = "You are the winner of the game!"
            playerScore = 0;
            computerScore = 0;
            document.getElementById('player-score').innerText = `Player: ${playerScore}`;
            document.getElementById('computer-score').innerText = `Computer: ${computerScore}`;

        } else if (computerScore === 5) {
            gameWinner.innerText = "Computer is the winner of the game!"
            playerScore = 0;
            computerScore = 0;
            document.getElementById('player-score').innerText = `Player: ${playerScore}`;
            document.getElementById('computer-score').innerText = `Computer: ${computerScore}`;

        }
    })
})

// Generate random computer selection
function getComputerSelection() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerSelection;
    if (randomNumber === 1) {
        computerSelection = "rock";
    }
    else if (randomNumber === 2) {
        computerSelection = "paper";
    }
    else {
        computerSelection = "scissors";
    }
    // console.log(computerSelection)
    return computerSelection;
}

// Compare user input and computer selection
function playRound(playerSelection) {
    let computerSelection = getComputerSelection();
    let roundWinner;
    let roundResult = document.querySelector('#result');
    if (playerSelection === "rock" && computerSelection === "scissors") {
        roundResult.innerText = "You Win! Rock beats Scissors";
        return roundWinner = "player";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        roundResult.innerText = "You Win! Scissors beat Paper";
        return roundWinner = "player";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        roundResult.innerText = "You Win! Paper beats Rock";
        return roundWinner = "player";
    } else if (playerSelection === computerSelection) {
        roundResult.innerText = "It's a tie!";
        return roundWinner = "none";
    } else {
        if (computerSelection === "scissors") {
            roundResult.innerText = "You Lose! Scissors beat Paper";
            return roundWinner = "computer";
        } else if (computerSelection === "paper") {
            roundResult.innerText = "You Lose! Paper beats Rock";
            return roundWinner = "computer";
        } else {
            roundResult.innerText = "You Lose! Rock beats Scissors";
            return roundWinner = "computer";
        }
    }
}










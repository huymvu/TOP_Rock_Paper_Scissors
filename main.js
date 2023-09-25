// -----Project: Rock Paper Scissors-----

// -----Problem-----
// Write a program that simulates a rock paper scissors game 
// The program takes user's input (rock/paper/scissors) 
// then compares it with the computer generated selection (rock/paper/scissors)
// and declares the winner by following these rules:
// Rock beats Scissors
// Scissors beat Paper
// Paper beats Rock
// Same object will be a tie

// -----Plan/Pseudocode-----
// Get user input with case-insensitive
// function getPlayerSelection(selection) {
//     let playerSelection = prompt("What's your selection? Rock/Paper/Scissors");
// }

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
// If user input is Rock and computer selection is Scissors
//     then declares the winner of the round is the user
// If user input is Scissors and computer selection is Paper
//     then declares the winner of the round is the user
// If user input is Paper and computer selection is Rock
//     then declares the winner of the round is the user
// If user input is the same as computer selection
//     then declares it's a tie
// Otherwise declares the user loses
// --> single round function
function playRound(playerSelection) {
    let computerSelection = getComputerSelection();
    let roundWinner;
    let roundResult = document.querySelector('#result');
    if (playerSelection === "rock" && computerSelection === "scissors") {
        // console.log("You Win! Rock beats Scissors");
        roundResult.innerText = "You Win! Rock beats Scissors";
        return roundWinner = "player";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        // console.log("You Win! Scissors beat Paper");
        roundResult.innerText = "You Win! Scissors beat Paper";
        return roundWinner = "player";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        // console.log("You Win! Paper beats Rock ");
        roundResult.innerText = "You Win! Paper beats Rock";
        return roundWinner = "player";
    } else if (playerSelection === computerSelection) {
        // console.log("It's a tie!");
        roundResult.innerText = "It's a tie!";
        return roundWinner = "none";
    } else {
        if (computerSelection === "scissors") {
            // console.log(`You Lose! Scissors beat Paper`);
            roundResult.innerText = "You Lose! Scissors beat Paper";
            return roundWinner = "computer";
        } else if (computerSelection === "paper") {
            // console.log(`You Lose! Paper beats Rock`);
            roundResult.innerText = "You Lose! Paper beats Rock";
            return roundWinner = "computer";
        } else {
            // console.log(`You Lose! Rock beats Scissors`);
            roundResult.innerText = "You Lose! Rock beats Scissors";
            return roundWinner = "computer";
        }
    }
}

// Loop the game 5 times and keeps the score and report a winner at the end
// --> 5 round game function
// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     for (let round = 1; round <= 5; round++) {
//         let playerSelection = getPlayerSelection();
//         let computerSelection = getComputerSelection();
//         let roundWinner = playRound(playerSelection, computerSelection);
//         if (roundWinner === "player") {
//             playerScore++;
//         } else if (roundWinner === "computer") {
//             computerScore++;
//         } else {
//             playerScore = playerScore;
//             computerScore = computerScore;
//         }
//     }
//     console.log(`Player Score: ${playerScore}`);
//     console.log(`Computer Score: ${computerScore}`);
//     if (playerScore > computerScore) {
//         console.log("You are the winner of the game!");
//     } else if (computerScore > playerScore) {
//         console.log("Computer is the winner of the game");
//     } else {
//         console.log("You and the computer are tie!");
//     }
// }

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








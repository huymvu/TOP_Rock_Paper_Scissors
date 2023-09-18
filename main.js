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
// Generate random computer selection
// Compare user input and computer selection
// If user input is Rock and computer selection is Scissors
//     then declares the winner of the round is the user
// If user input is Scissors and computer selection is Paper
//     then declares the winner of the round is the user
// If user input is Paper and computer selection is Scissors
//     then declares the winner of the round is the user
// If user input is the same as computer selection
//     then declares it's a tie
// Otherwise declares the user loses
// Loop the game 5 times and keeps the score and report a winner and loser at the end
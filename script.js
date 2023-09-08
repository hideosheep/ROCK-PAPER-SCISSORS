function computerPlay() {
    const pick = ['rock', 'paper', 'scissors'];
    return pick[Math.floor(Math.random() * pick.length)];
 }
 function playRound(playerSelection, computerSelection) {
    console.log("New Round")
    if (playerSelection === computerSelection) {
       return `It's a tie! you both picked ${playerSelection}`;
    } else if ((playerSelection === "rock" && computerSelection === "scissors")||(playerSelection === "paper" && computerSelection === "rock")
    ||(playerSelection === "scissors" && computerSelection === "paper")) {
    console.log(`You won this round ${playerSelection} beats${computerSelection}`)
    return 0;
    } 
       console.log( `You lose! ${computerSelection} beats ${playerSelection}`);
return 1;    
 }

 function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let rounds = 0;
  
    while (rounds < 5) {
      const playerChoice = prompt("Enter your choice: rock, paper, or scissors");
      const computer = computerPlay();
      const result = playRound(playerChoice, computer);
  
      console.log(`Player: ${playerChoice} vs Computer: ${computer}`);
      console.log(result);
  
      if (result === "You win!") {
        playerScore++;
      } else if (result === "Computer wins!") {
        computerScore++;
      }
  
      rounds++;
    }
  
    if (playerScore > computerScore) {
      console.log("You win the best of 5 game!");
    } else if (computerScore > playerScore) {
      console.log("Computer wins the best of 5 game!");
    } else {
      console.log("It's a tie in the best of 5 game!");
    }
  }
playGame()
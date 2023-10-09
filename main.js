const Choices = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

const checkWinner = (player, computer) => {
  if (player === computer) {
    return "Draw";
  } else if (player === "rock") {
    return computer === "scissors" ? "player" : "computer";
  } else if (player === "paper") {
    return computer === "rock" ? "player" : "computer";
  } else {
    return computer === "paper" ? "player" : "computer";
  }
};

const showResult = (result) => {
  if (result === "player") {
    console.log("You Win!");
    playerScore++;
  } else if (result === "computer") {
    console.log("You Lose!");
    computerScore++;
  } else {
    console.log("It's a tie");
  }
  console.log(`Your score : ${playerScore}`);
  console.log(`Computer score : ${computerScore}`);
  console.log("--------------------------");
};

const play = () => {
  if (playerScore === 2) {
    console.log(`Game ended You are Winner`);
    return;
  } else if (computerScore === 2) {
    console.log(`Game ended Computer is Winner`);
    return;
  } else {
    // player choice
    const playerChoice = prompt(`Choose ${Choices}`);
    if (Choices.indexOf(playerChoice?.toLowerCase()) !== -1) {
      console.log(`You Choose ${playerChoice.toLowerCase()}`);
    } else {
      console.log("You Cheated!");
      return;
    }
    // computer choice
    const random = Math.floor(Math.random() * 3);
    const computerChoice = Choices[random];
    console.log(`Computer choose ${computerChoice}`);
    // result
    const gameResult = checkWinner(playerChoice, computerChoice);
    showResult(gameResult);
    play();
  }
};

play();

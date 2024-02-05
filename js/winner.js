const body = document.querySelector("body");
const playAgain = document.querySelector(".play-again");
const userImage = document.querySelector(".your-pick > img");
const computerImage = document.querySelector(".computer-pick > img");
const youWinText = document.querySelector(".you-win");
const computerWinsText = document.querySelector(".computer-wins");
const params = new URLSearchParams(window.location.search);

const choiceToImageMap = {
  0: { image: "rock.png", alt: "Rock" },
  1: { image: "scissors.png", alt: "Scissors" },
  2: { image: "paper.png", alt: "Parer" },
};

let user, computer, winner;

user = params.get("user");
computer = params.get("computer");

userImage.src = `../images/${choiceToImageMap[user].image}`;
userImage.alt = choiceToImageMap[user].alt;
computerImage.src = `../images/${choiceToImageMap[computer].image}`;
userImage.alt = choiceToImageMap[computer].alt;

playAgain.addEventListener("click", () => {
  window.location.href = "./";
});

const checkWinner = () => {
  let winner = "";
  if (user === computer) {
    winner = "tie";
  } else if (user === "0" && computer === "1") {
    winner = "you";
  } else if (user === "0" && computer === "2") {
    winner = "computer";
  } else if (user === "1" && computer === "0") {
    winner = "computer";
  } else if (user === "1" && computer === "2") {
    winner = "you";
  } else if (user === "2" && computer === "0") {
    winner = "you";
  } else if (user === "2" && computer === "1") {
    winner = "computer";
  }

  if (winner === "tie") {
    youWinText.innerHTML = "tie";
    computerWinsText.innerHTML = "tie";
  } else if (winner === "you") {
    body.classList.add("you-win");
    youWinText.innerHTML = "You win!";
  } else {
    body.classList.add("computer-win");
    computerWinsText.innerHTML = "Computer win!";
  }
};
checkWinner();

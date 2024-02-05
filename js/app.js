const buttons = document.querySelectorAll("li.pick-one > button");

buttons.forEach((button, i) => {
  button.addEventListener("click", (e) => {
    const userChoise = i;
    console.log("user", userChoise);
    const computerChoise = Math.floor(Math.random() * 3);
    console.log("computer", computerChoise);
    window.location.href = `./winner.html?user=${userChoise}&computer=${computerChoise}`;
  });
});

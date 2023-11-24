const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

const emojis = {
  rock: '✊',
  paper: '✋',
  scissors: '✌️',
  win: '🎉',
  lose: '😔',
  draw: '🙁',
};

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = `<span class="emoji">${emojis[userChoice]}</span> ${userChoice}`;
  generateComputerChoice();
  getResult();
}));

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  const choices = ['rock', 'paper', 'scissors'];
  computerChoice = choices[randomNumber];
  computerChoiceDisplay.innerHTML = `<span class="emoji">${emojis[computerChoice]}</span> ${computerChoice}`;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = `<span class="emoji">${emojis.draw}</span> It's a draw!`;
  } else if ((computerChoice === 'rock' && userChoice === 'scissors') ||
             (computerChoice === 'scissors' && userChoice === 'paper') ||
             (computerChoice === 'paper' && userChoice === 'rock')) {
    result = `<span class="emoji">${emojis.lose}</span> You lose!`;
  } else {
    result = `<span class="emoji">${emojis.win}</span> You win!`;
  }
  resultDisplay.innerHTML = result;
}

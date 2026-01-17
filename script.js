//your JS code here. If required.
let currentPlayer = 'x';
let gameActive = false;
let player1 = '';
let player2 = '';

const messageDiv = document.querySelector('.message');
const cells = document.querySelectorAll('.cell');

const winPatterns = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

document.getElementById('submit').addEventListener('click', () => {
  player1 = document.getElementById('player1').value;
  player2 = document.getElementById('player2').value;

  if (!player1 || !player2) return;

  gameActive = true;
  currentPlayer = 'x';
  messageDiv.innerText = `${player1}, you're up`;

  cells.forEach(cell => {
    cell.innerText = '';
  });
});

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (!gameActive || cell.innerText !== '') return;

    cell.innerText = currentPlayer;

    if (checkWin()) {
      const winner = currentPlayer === 'x' ? player1 : player2;
      messageDiv.innerText = `${winner} congratulations you won!`;
      gameActive = false;
      return;
    }

    currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
    const nextPlayer = currentPlayer === 'x' ? player1 : player2;
    messageDiv.innerText = `${nextPlayer}, you're up`;
  });
});

function checkWin() {
  return winPatterns.some(pattern =>
    pattern.every(id =>
      document.getElementById(id).innerText === currentPlayer
    )
  );
}

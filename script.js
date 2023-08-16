const words = ['javascript', 'html', 'css', 'programming', 'developer'];
const gridSize = 10;

function generatePuzzle() {
  const grid = document.getElementById('puzzle-grid');
  grid.innerHTML = '';

  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.textContent = getRandomLetter();
      grid.appendChild(cell);
    }
  }

  placeWords();
}

function getRandomLetter() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function placeWords() {
  const grid = document.querySelectorAll('.cell');
  for (const word of words) {
    const direction = Math.random() > 0.5 ? 'horizontal' : 'vertical';
    const startRow = Math.floor(Math.random() * gridSize);
    const startCol = Math.floor(Math.random() * gridSize);

    if (direction === 'horizontal' && startCol + word.length <= gridSize) {
      for (let i = 0; i < word.length; i++) {
        grid[startRow * gridSize + startCol + i].textContent = word[i];
      }
    } else if (direction === 'vertical' && startRow + word.length <= gridSize) {
      for (let i = 0; i < word.length; i++) {
        grid[(startRow + i) * gridSize + startCol].textContent = word[i];
      }
    } else {
      placeWords(); // Retry with a different word placement
      return;
    }
  }
}

generatePuzzle();

const wordsearch = document.getElementById('wordsearch');
const wordList = document.getElementById('wordList');
const message = document.getElementById('message');
const checkButton = document.getElementById('checkButton');
const words = [
  'gato',
  'cachorro',
  'passarinho',
  'elefante',
  'girafa',
  'tigre',
  'leão',
  'macaco',
  'cobra',
  'zebra'
];

let wordsearchGrid = [];

// Função para embaralhar uma palavra
function shuffleWord(word) {
  return word.split('').sort(() => Math.random() - 0.5).join('');
}

// Função para criar a grade do caça-palavras
function createWordsearchGrid() {
  const gridSize = 10;
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const grid = [];

  for (let i = 0; i < gridSize; i++) {
    const row = [];
    for (let j = 0; j < gridSize; j++) {
      const randomLetter = letters[Math.floor(Math.random() * letters.length)];
      row.push(randomLetter);
    }
    grid.push(row);
  }

  return grid;
}

// Função para verificar se uma palavra está presente na grade
function isWordInGrid(grid, word) {
  const gridSize = grid.length;

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      // Verifica se a palavra pode começar na posição atual
      if (grid[i][j] === word[0]) {
        // Verifica nas 8 direções possíveis
        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            if (dx !== 0 || dy !== 0) {
              // Inicializa a posição atual
              let posX = i;
              let posY = j;
              let found = true;

              // Verifica se a palavra está presente nessa direção
              for (let k = 1; k < word.length; k++) {
                posX += dx;
                posY += dy;

                // Verifica se a posição está dentro dos limites da grade
                if (
                  posX < 0 ||
                  posX >= gridSize ||
                  posY < 0 ||
                  posY >= gridSize ||
                  grid[posX][posY] !== word[k]
                ) {
                  found = false;
                  break;
                }
              }

              if (found) {
                return true;
              }
            }
          }
        }
      }
    }
  }

  return false;
}

// Função para criar o caça-palavras
function createWordsearch() {
  wordsearchGrid = createWordsearchGrid();
  const wordsearchHTML = document.createElement('table');

  for (let i = 0; i < wordsearchGrid.length; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < wordsearchGrid[i].length; j++) {
      const cell = document.createElement('td');
      cell.textContent = wordsearchGrid[i][j];
      row.appendChild(cell);
    }
    wordsearchHTML.appendChild(row);
  }

  wordsearch.appendChild(wordsearchHTML);
}

// Função para inserir as palavras na grade do jogo
function insertWordsInGrid(words) {
    const gridSize = wordsearchGrid.length;
    const shuffledWords = words.map(word => shuffleWord(word.toLowerCase()));
  
    const wordsToInsert = [...shuffledWords]; // Cria uma cópia do array shuffledWords
  
    for (let i = 0; i < shuffledWords.length; i++) {
      const word = shuffledWords[i];
      const inserted = isWordInGrid(wordsearchGrid, word);
  
      if (inserted) {
        wordsToInsert.splice(wordsToInsert.indexOf(word), 1); // Remove a palavra do novo array
      } else {
        for (let j = 0; j < word.length; j++) {
          const posX = Math.floor(Math.random() * gridSize);
          const posY = Math.floor(Math.random() * gridSize);
          wordsearchGrid[posX][posY] = word[j];
        }
      }
    }
  
    words.splice(0, words.length, ...wordsToInsert); // Substitui as palavras no array original
  }
  
  

// Função para exibir a lista de palavras para encontrar
function displayWordList(words) {
  for (let i = 0; i < words.length; i++) {
    const wordItem = document.createElement('li');
    wordItem.textContent = words[i];
    wordList.appendChild(wordItem);
  }
}

// Função para verificar se as palavras foram encontradas corretamente
function checkWords() {
  const wordItems = wordList.getElementsByTagName('li');
  let foundCount = 0;

  for (let i = 0; i < wordItems.length; i++) {
    const word = wordItems[i].textContent;
    const found = isWordInGrid(wordsearchGrid, word);

    if (found) {
      wordItems[i].classList.add('found');
      foundCount++;
    }
  }

  if (foundCount === wordItems.length) {
    message.textContent = 'Parabéns! Você encontrou todas as palavras!';
  } else {
    message.textContent = `Você encontrou ${foundCount} de ${wordItems.length} palavras.`;
  }
}

// Função principal para iniciar o jogo
function startGame() {
  createWordsearch();
  insertWordsInGrid(words);
  displayWordList(words);
  checkButton.addEventListener('click', checkWords);
}

// Inicia o jogo ao carregar a página
window.addEventListener('DOMContentLoaded', startGame);

// Tabuleiro inicial de exemplo
const seaBoard = [
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
];

/*
  Desenvolva seu código logo abaixo
*/
const shipPositions = [];
const initialBoard = [
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
];

function allocateShips(shipPositions, initialBoard) {

  for (let i = 0; i <= shipPositions.length - 1; i++) {

    //Esse codigo esta posicionando os navios S na posiçao de shipPositions
    initialBoard[shipPositions[i][0]][shipPositions[i][1]] = "S";
  }

  return initialBoard;
}
allocateShips(shipPositions, initialBoard);


const guesses = [];
const mountedBoard = []

function checkGuesses(guesses, mountedBoard) {

  for (let i = 0; i <= guesses.length - 1; i++) {

    //o codigo esta verificando se tem navio S na posiçao do guesses se tiver troca por navio X
    if (mountedBoard[guesses[i][0]][guesses[i][1]] === "S") {

      mountedBoard[guesses[i][0]][guesses[i][1]] = "X"

    }

  }

  return mountedBoard

}
checkGuesses(guesses, mountedBoard);


const guessedBoard = []

function checkWinCondition(guessedBoard) {

  let teamS = 0;
  let teamX = 0;
  for (let i = 0; i <= guessedBoard.length - 1; i++) {

    for (let j = 0; j <= guessedBoard[i].length; j++) {
      
      //os ifs estao percorrendo todo o tabuleiro e fazendo contagens dos navios (s) e (x)
      //objetivo da contagem e para saber qual time ganhou
      if (guessedBoard[i][j] === "S") {
        teamS += 1

      }
      if (guessedBoard[i][j] === "X") {
        teamX += 1
      }
    }
  }
  
  //se time S ganha me retorna false se o X ganha me retorna true
  if (teamS > teamX) {
    return false
  } else {
    return true
  }
}
checkWinCondition(guessedBoard)
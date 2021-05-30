const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
let circleTurn = false
let draw = false

const history = []
const historyButton = document.getElementById('historyButton')
const historyMessage = document.getElementById('historyMessage')
const prevButton = document.getElementById('prevButton')
const nextButton = document.getElementById('nextButton')
const historyMessageTextElement = document.querySelector('[data-history-message-text]')
let historyCounter = 0

const choosePlayer = document.getElementById('choosePlayer')
const playerChooseButton = document.getElementById('playerChooseButton')
playerChooseButton.addEventListener('click', changePlayer)


historyButton.addEventListener('click', showHistory)
prevButton.addEventListener('click', prevHistory)
nextButton.addEventListener('click', nextHistory)

startGame()

restartButton.addEventListener('click', startGame)

function startGame() {
  // circleTurn = false
  choosePlayer.classList.add('show')
  cellElements.forEach(cell => {
    cell.classList.remove(X_CLASS)
    cell.classList.remove(CIRCLE_CLASS)
    cell.removeEventListener('click', handleClick)
    cell.addEventListener('click', handleClick, { once: true })
  })
  setBoardHoverClass()
  winningMessageElement.classList.remove('show')
  historyMessage.classList.remove('show')
}

function handleClick(e) {
  choosePlayer.classList.remove('show')
  const cell = e.target
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
  placeMark(cell, currentClass)
  saveState()
  if (checkWin(currentClass)) {
    draw = false
    // endGame(false)
    endGame()
  } else if (isDraw()) {
    draw = true
    endGame()
  } else {
    swapTurns()
    setBoardHoverClass()
  }
}

function endGame() {
  if (draw) {
    winningMessageTextElement.innerText = 'Draw!'
  } else {
    winningMessageTextElement.innerText = `${circleTurn ? "O" : "X"} Wins!`
  }
  winningMessageElement.classList.add('show')
}

function isDraw() {
  return [...cellElements].every(cell => {
    return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
  })
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass)
}

function swapTurns() {
  circleTurn = !circleTurn
}

function setBoardHoverClass() {
  board.classList.remove(X_CLASS)
  board.classList.remove(CIRCLE_CLASS)
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS)
  } else {
    board.classList.add(X_CLASS)
  }
}

function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass)
    })
  })
}


function saveState() {
  history.push(board.innerHTML)
}

function showHistory() {
  winningMessageElement.classList.remove('show')
  choosePlayer.classList.remove('show')
  historyMessage.classList.add('show')
  historyCounter = history.length - 1
  nextButton.disabled = true
  showHistoryText()
}

function showHistoryText() {
  if (draw) {
    historyMessageTextElement.innerText = 'How You Tied'
  } else {
    historyMessageTextElement.innerText = `How ${circleTurn ? "O" : "X"} Won`
  }
  historyMessageTextElement.classList.add('show')
}

function prevHistory() {
  nextButton.disabled = false
  if (historyCounter > 0) {
    board.innerHTML = history[--historyCounter]
  }
  if (historyCounter === 0) {
    prevButton.disabled = true
  }
}

function nextHistory() {
  prevButton.disabled = false
  if (historyCounter < history.length - 1) {
    board.innerHTML = history[++historyCounter]
  }
  if (historyCounter === history.length - 1) {
    nextButton.disabled = true
  }
}


function changePlayer() {
  circleTurn = circleTurn ? false : true
  playerChooseButton.innerHTML = `Play as ${circleTurn ? 'X' : 'O'}`
  startGame()
  console.log(circleTurn)
}
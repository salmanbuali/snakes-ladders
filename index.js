const tiles = document.querySelectorAll('.tile')
const p1 = document.querySelector('.player1')
const p2 = document.querySelector('.player2')
const p1Dice = document.querySelector('#p1Button')
const p2Dice = document.querySelector('#p2Button')
const p1DiceRes = document.querySelector('#p1DiceResult')
const p2DiceRes = document.querySelector('#p2DiceResult')
const winnerP = document.querySelector('#announceWinner')
let winner = ''
let turn = 'playerOne'
let dice1 = 0
let dice2 = 0

p1Dice.addEventListener('click', () => {
  if (winner) {
    return
  }
  if (turn === 'playerTwo') {
    return
  }
  turn = 'playerTwo'
  let dice1 = Math.floor(Math.random() * 6) + 1
  p1DiceRes.innerText = dice1
  for (i = 0; i < tiles.length; i++) {
    if (tiles[i].contains(p1)) {
      tiles[i].removeChild(p1)
      newindex = i + dice1
      if (newindex >= 99) {
        tiles[99].appendChild(p1)
        winner = 'Player One WON'
        winnerP.innerText = winner
      }
      tiles[newindex].appendChild(p1)
      if (newindex === 91) {
        tiles[60].appendChild(p1)
      }
      if (newindex === 2) {
        tiles[23].appendChild(p1)
      }
      if (newindex === 18) {
        tiles[49].appendChild(p1)
      }
      if (newindex === 45) {
        tiles[16].appendChild(p1)
      }
      if (newindex === 54) {
        tiles[32].appendChild(p1)
      }
      if (newindex === 34) {
        tiles[75].appendChild(p1)
      }
      if (newindex === 26) {
        tiles[6].appendChild(p1)
      }
      if (newindex === 87) {
        tiles[66].appendChild(p1)
      }
      if (newindex === 62) {
        tiles[83].appendChild(p1)
      }
      break
    }
  }
})

p2Dice.addEventListener('click', () => {
  if (winner) {
    return
  }
  if (turn === 'playerOne') {
    return
  }
  turn = 'playerOne'
  let dice2 = Math.floor(Math.random() * 6) + 1
  p2DiceRes.innerText = dice2
  for (i = 0; i < tiles.length; i++) {
    if (tiles[i].contains(p2)) {
      tiles[i].removeChild(p2)
      newindex = i + dice2
      if (newindex >= 99) {
        tiles[99].appendChild(p2)
        winner = 'Player Two WON'
        winnerP.innerText = winner
      }
      tiles[newindex].appendChild(p2)
      if (newindex === 91) {
        tiles[60].appendChild(p2)
      }
      if (newindex === 2) {
        tiles[23].appendChild(p2)
      }
      if (newindex === 18) {
        tiles[49].appendChild(p2)
      }
      if (newindex === 45) {
        tiles[16].appendChild(p2)
      }
      if (newindex === 54) {
        tiles[32].appendChild(p2)
      }
      if (newindex === 34) {
        tiles[75].appendChild(p2)
      }
      if (newindex === 26) {
        tiles[6].appendChild(p2)
      }
      if (newindex === 87) {
        tiles[66].appendChild(p2)
      }
      if (newindex === 62) {
        tiles[83].appendChild(p2)
      }
      break
    }
  }
})

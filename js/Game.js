/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor () {
    this.missed = 0
    this.phrases = [
      new Phrase('Three strikes and you are out'),
      new Phrase('May the Force be with you'),
      new Phrase('Run Forrest run'),
      new Phrase('A day late and a dollar short'),
      new Phrase('Cool as a cucumber')]
    this.activePhrase = null
  }

  getRandomPhrase () {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)]
  }

  startGame () {
    for ()
    const overlayDiv = document.querySelector('#overlay')
    overlayDiv.style.display = 'none'
    this.activePhrase = this.getRandomPhrase()
    this.activePhrase.addPhraseToDisplay()
  }

  handleInteraction (button) {
    const letterKeys = document.querySelectorAll('.key')

    if (this.activePhrase.checkLetter(button)) {
      for (let i = 0; i < letterKeys.length; i++) {
        if (button.textContent === letterKeys[i].textContent) {
          letterKeys[i].disabled = true
          letterKeys[i].classList.add('chosen')
        }
      }
      this.activePhrase.showMatchedLetter(button.textContent)
      const win = this.checkForWin()
      if (win) {
        this.gameOver('win')
      }
    } else {
      for (let i = 0; i < letterKeys.length; i++) {
        if (button.textContent === letterKeys[i].textContent) {
          letterKeys[i].disabled = true
          letterKeys[i].classList.add('wrong')
        }
      }
      this.removeLife()
    }
  }

  checkForWin () {
    const hiddenLI = document.querySelectorAll('.hide')
    if (hiddenLI.length === 0) {
      return true
    } else {
      return false
    }
  }

  removeLife () {
    const heartElements = document.querySelectorAll('.tries')

    heartElements[this.missed].firstElementChild.src = 'images/lostHeart.png'
    this.missed++
    if (this.missed === 5) {
      this.gameOver('loss')
    }
  }

  gameOver (gameWon) {
    const gameOverString = document.querySelector('#game-over-message')
    const overlayDiv = document.querySelector('#overlay')
    overlayDiv.style.display = 'block'

    if (gameWon === 'win') {
      overlayDiv.className = 'win'
      gameOverString.textContent = 'Nice job, you won! would you like to play again?'
    } else if (gameWon === 'loss') {
      overlayDiv.className = 'lose'
      gameOverString.textContent = 'Almost! you lost, would you like to try again?'
    }
  }
}

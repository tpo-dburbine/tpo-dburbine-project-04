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

  // random phrase method
  getRandomPhrase () {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)]
  }

  // seperate resetBoard method
  resetBoard () {
    const ul = document.querySelector('ul')
    const heartElements = document.querySelectorAll('.tries')
    const letterButtons = document.querySelectorAll('button')

    for (let i = 0; i < 5; i++) {
      heartElements[i].firstElementChild.src = 'images/liveHeart.png'
    }
    this.missed = 0

    while (ul.lastChild) {
      ul.removeChild(ul.lastChild)
    }

    for (let i = 0; i < letterButtons.length; i++) {
      letterButtons[i].className = 'key'
      letterButtons[i].disabled = false
    }
  }

  // startGame method calls reset board and then initializes the game
  startGame () {
    this.resetBoard()

    const overlayDiv = document.querySelector('#overlay')
    overlayDiv.style.display = 'none'
    this.activePhrase = this.getRandomPhrase()
    this.activePhrase.addPhraseToDisplay()
  }

  // handleInteraction method to check if clicked letter is included or not and call proper methods
  handleInteraction (button) {
    const letterKeys = document.querySelectorAll('.key')

    // conditional to check if const of button is in the active phrase
    if (this.activePhrase.checkLetter(button)) {
      for (let i = 0; i < letterKeys.length; i++) {
        // conditional to find what button was clicked and disable it
        if (button.textContent === letterKeys[i].textContent) {
          letterKeys[i].disabled = true
          letterKeys[i].classList.add('chosen')
        }
      }
      // calls showMatchedLetter on buttons text content
      this.activePhrase.showMatchedLetter(button.textContent)
      // initialize win as a variable to store method checkForWin, if returns true, passes gameOver('win')
      const win = this.checkForWin()
      if (win) {
        this.gameOver('win')
      }
    } else {
      for (let i = 0; i < letterKeys.length; i++) {
        // conditional to find what button was clicked and disable it
        if (button.textContent === letterKeys[i].textContent) {
          letterKeys[i].disabled = true
          letterKeys[i].classList.add('wrong')
        }
      }
      // call remove life if no match
      this.removeLife()
    }
  }

  // checkForWin method to return true there are no more hidden elements, else return false
  checkForWin () {
    const hiddenLI = document.querySelectorAll('.hide')
    if (hiddenLI.length === 0) {
      return true
    } else {
      return false
    }
  }

  // removeLife method changes image source if wrong button is clicked, calls gameOver when missed is 5
  removeLife () {
    const heartElements = document.querySelectorAll('.tries')

    heartElements[this.missed].firstElementChild.src = 'images/lostHeart.png'
    this.missed++
    if (this.missed === 5) {
      this.gameOver('loss')
    }
  }

  // gameOver displays overlay and based on win/loss displays specific message
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

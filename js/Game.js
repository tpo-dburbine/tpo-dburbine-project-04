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
    const randomPhrase = Math.floor(Math.random() * this.phrases.length)
    return this.phrases[randomPhrase]
  }

  startGame () {
    const overlayDiv = document.querySelector('#overlay')
    overlayDiv.style.display = 'none'
    this.activePhrase = this.getRandomPhrase()
    this.activePhrase.addPhraseToDisplay()
  }
}

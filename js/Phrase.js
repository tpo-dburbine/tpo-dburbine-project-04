/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js
 */

class Phrase {
  constructor (phrase) {
    this.phrase = phrase.toLowerCase()
  }

  addPhraseToDisplay () {
    const phraseUL = document.querySelector('#phrase ul')
    for (let i = 0; i < this.phrase.length; i++) {
      const liElement = document.createElement('li')
      if (this.phrase[i] === ' ') {
        liElement.className = 'space'
      } else {
        liElement.className = `hide letter ${this.phrase[i]}`
        liElement.textContent = `${this.phrase[i]}`
      }
      phraseUL.append(liElement)
    }
  }

  checkLetter (letter) {
    if (this.phrase.includes(letter.textContent)) {
      return true
    } else {
      return false
    }
  }

  showMatchedLetter (letter) {
    const letterList = document.querySelector('#phrase').firstElementChild.children

    for (let i = 0; i < letterList.length; i++) {
      if (letterList[i].textContent === letter) {
        letterList[i].classList.replace('hide', 'show')
      }
    }
  }
}

/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js
 */

class Phrase {
  constructor (phrase) {
    this.phrase = phrase.toLowerCase()
  }

  // addPhraseToDisplay method creates li elements based on characters in phrase
  // sets class based on type of character and appends it to the ul
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

  // checkLetter returns true if the phrase includes the letter passed
  checkLetter (letter) {
    if (this.phrase.includes(letter.textContent)) {
      return true
    } else {
      return false
    }
  }

  // showMatchedLetter shows the letters if the li elements tect content matches the letter passed through
  showMatchedLetter (letter) {
    const letterList = document.querySelector('#phrase').firstElementChild.children

    for (let i = 0; i < letterList.length; i++) {
      if (letterList[i].textContent === letter) {
        letterList[i].classList.replace('hide', 'show')
      }
    }
  }
}

/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game
const lettersButtonDiv = document.querySelector('#qwerty')

document.querySelector('#btn__reset').addEventListener('click', () => {
  game = new Game()
  game.startGame()
})

lettersButtonDiv.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    game.handleInteraction(e.target)
  }
})

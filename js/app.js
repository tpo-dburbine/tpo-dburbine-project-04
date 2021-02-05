/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// global variables
let game
const lettersButtonDiv = document.querySelector('#qwerty')

// add event listener to the start button and calls startGame if clicked
document.querySelector('#btn__reset').addEventListener('click', () => {
  game = new Game()
  game.startGame()
})

// event listener called on letter buttons, calls handleInteraction on target button
lettersButtonDiv.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    game.handleInteraction(e.target)
  }
})

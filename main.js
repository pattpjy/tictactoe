// const Game = require("./game")

//Add variables/querySlector
var a1Btn = document.querySelector('#A1')
var a2Btn = document.querySelector('#A2')
var a3Btn = document.querySelector('#A3')
var b1Btn = document.querySelector('#B1')
var b2Btn = document.querySelector('#B2')
var b3Btn = document.querySelector('#B3')
var c1Btn = document.querySelector('#C1')
var c2Btn = document.querySelector('#C2')
var c3Btn = document.querySelector('#C3')

//Add event listener
window.addEventListener('load', startGame);
a1Btn.addEventListener('click', changeToken)
a2Btn.addEventListener('click', changeToken)
a3Btn.addEventListener('click', changeToken)
b1Btn.addEventListener('click', changeToken)
b2Btn.addEventListener('click', changeToken)
b3Btn.addEventListener('click', changeToken)
c1Btn.addEventListener('click', changeToken)
c2Btn.addEventListener('click', changeToken)
c3Btn.addEventListener('click', changeToken)


//Add functions
// when click token of p1 show up
var newGame = ''

function startGame(event) {
    newGame = new Game()
}

function changeToken(event) {
    event.target.innerText= newGame.activePlayer.id
    newGame.placement(event.target.id)
}


// alternate token 
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
var statP1 = document.querySelector('#P1-Stat')
var statP2 = document.querySelector('#P2-Stat')
var announceTxt = document.querySelector('.announce')
var reset = document.querySelectorAll('.box')
//Add event listener
window.addEventListener('load', startGame);
a1Btn.addEventListener('click', playGame)
a2Btn.addEventListener('click', playGame)
a3Btn.addEventListener('click', playGame)
b1Btn.addEventListener('click', playGame)
b2Btn.addEventListener('click', playGame)
b3Btn.addEventListener('click', playGame)
c1Btn.addEventListener('click', playGame)
c2Btn.addEventListener('click', playGame)
c3Btn.addEventListener('click', playGame)
// when click a button, game place the player on the game board, check win condition,and reset the game
// for tmr, fix function in button to be annonymouse and add changeToken, winCheck and reset to the button

//Add functions
var newGame = ''

function startGame(event) {
    newGame = new Game()
    announceTxt.innerHTML = `It's ${newGame.activePlayer.token}'s turn`
}
function playGame(event){
    var successfulPlacement = changeToken(event)
    if (successfulPlacement) {
        checkWin(event)
    } else {
        alert('Try somewhere else')
    }
}

function changeToken(event) {
    var wasSuccessful = newGame.placement(event.target.id)
    if (wasSuccessful) {
        event.target.innerText= newGame.activePlayer.token
    }
    return wasSuccessful
}

function updateScores (event) {
    statP1.innerHTML = newGame.player1.wins
    statP2.innerHTML = newGame.player2.wins
}

function checkWin(){
    if(newGame.isWon()){
        announceTxt.innerHTML = `${newGame.activePlayer.token} is a winner`
        updateScores()
        setTimeout(boardReset, 2000)
    } else if (newGame.isADraw()) {
        announceTxt.innerHTML = `Draw game!`
        setTimeout(boardReset, 2000)
    } else {
        newGame.nextPlayer()
        announceTxt.innerHTML = `It's ${newGame.activePlayer.token}'s turn`
    }
}

function boardReset(){
    newGame.reset()
    announceTxt.innerHTML = ''
    for( var i = 0; i < reset.length; i++){
        reset[i].innerHTML = ''
    } 
}

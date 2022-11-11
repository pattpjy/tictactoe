// Two Player instances
// A way to keep track of the data for the game board
// A way to keep track of which player’s turn it currently is
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game
var Player = require('./player');
class Game {
    constructor(){
    this.player1 = new Player('1','🏌️‍♂️', 0 )
    this.player2 = new Player('2','🏂', 0 )
    this.gameboard = { A1 : '', B1 : '', C1 : '',
                       A2 : '', B2 : '', C2 : '',
                       A3 : '', B3 : '', C3 : '',
                      }
    this.playerTurn = this.player1
    this.winConditon =  [
      ['A1','A2','A3'],['B1','B2','B3'], ['C1','C2','C3'],['A1','B1','C1'],['A2','B2','C2'], ['A3','B3','C3'],['A1','B2','C3'],['A3','B2','C1']
     ]
    }
  // compare this.gameboard === this.winCondition, and key value pair has to be the same player
  winCheck(play){
    for (var i = 0; i < 8; i++){
      for( var j = 0; j < 3; j++){
       if(this.gameboard[this.winConditon[i][j]]=== play){
        return `${play} is a WINNER`
       }
        // console.log(this.winConditon[i][j],j)
      // this.winConditon[i][j] === play
      } 
    }
  }
  placement(lo,play) {
     this.gameboard[lo] = play
  }
}



var game = new Game()

game.placement('A1','P1')
game.placement('A2','P1')
game.placement('A3','P1')

game.winCheck('P1')



//if player placement contain any of the win condition first, they win//
//player cannot place token that already have placement

// drawConditon = [
//    //If your opponent takes the middle square with an “X” or “O, ” the next move to ensure a tie is to place your letter in any of the corners. This way, there is no move that will allow them to win.
//   ]
//   [a2,b2,c3]

// taking input from each player add to board data
// use board data to check against winCondition
// annouce the winner

//all the game function goes here


module.exports = Game

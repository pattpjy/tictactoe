// Two Player instances
// A way to keep track of the data for the game board
// A way to keep track of which player’s turn it currently is
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game
var Player = require('./player');
class Game {
    constructor(){
    this.player1 = new Player('P1','🏌️‍♂️', 0 )
    this.player2 = new Player('P2','🏂', 0 )
    this.gameboard = { A1 : '', B1 : '', C1 : '',
                       A2 : '', B2 : '', C2 : '',
                       A3 : '', B3 : '', C3 : '',
                      }
    this.turnCount = ''
    this.activePlayer = this.player1
    this.winConditon =  [
      ['A1','A2','A3'],['B1','B2','B3'], ['C1','C2','C3'],['A1','B1','C1'],['A2','B2','C2'], ['A3','B3','C3'],['A1','B2','C3'],['A3','B2','C1']
     ]
    }
  
// need to be this.current player instead of parameter play
  winCheck(){
    for (var i = 0; i < 8; i++){
      if(this.gameboard[this.winConditon[i][0]] !== this.activePlayer || this.gameboard[this.winConditon[i][1]] !== this.activePlayer || this.gameboard[this.winConditon[i][2]] !== this.activePlayer){ 
      }
      return `${this.activePlayer.id} is a WINNER`
    }
  }

  placement(location) {
    if (this.gameboard[location]!== '') {
      return 'CLICK SOMEWHERE ELSE'
    }
    this.turnCount += 1
    this.gameboard[location] = this.playerTurn.id
    if( this.activePlayer === this.player1) {
      this.activePlayer = this.player2  
    } else {
      winCheck() // this function return true or false
      this.activePlayer = this.player1 // need to change to another swtich player function
    }
  }
  drawConditon(){
    if(this.turnCount !== 9){
    }
    return "It's a draw"
  }
  reset(){
    this.gameboard = { A1 : '', B1 : '', C1 : '',
                       A2 : '', B2 : '', C2 : '',
                       A3 : '', B3 : '', C3 : '',
                      }
    this.turnCount = ''
    this.activePlayer = this.player1
  }
}

module.exports = Game

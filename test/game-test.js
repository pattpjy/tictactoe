var assert = require('chai').assert;
var Player = require('../player');
var Game = require('../game');

describe('Player', function () {
    it('should be a function', function () {
      assert.isFunction(Player);
    });
    it('Should have id, token and win count', function (){
        var player1 = new Player('P1','🏌️‍♂️',0)
        assert.equal(player1.id, 'P1')
        assert.equal(player1.id, 'P1')
        assert.equal(player1.id, 'P1')
    })
    it('Should increase win count', function (){
        var player1 = new Player('P1','🏌️‍♂️',0)
        player1.increaseWins()
        assert.equal(player1.wins, 1)
    }) 
}); 

describe('Game', function(){
    it('should be a function', function () {
        assert.isFunction(Game);
      });

    it('should check players position to the win condition and increase win count for the player',function(){
        var newGame = new Game()
        newGame.placement('A1')
        newGame.placement('B1')
        newGame.placement('C2')

        var check = newGame.isWon()
        assert.equal(check, false)
        newGame.placement('B2')
        newGame.placement('B1')
        newGame.placement('B3')

        var check2 = newGame.isWon()
        assert.equal(check2, true)
        assert.equal(newGame.activePlayer.wins, 1) 
    })

    it('should update player position on the game board', function(){
        var newGame = new Game()
        newGame.placement('A1')
        assert.equal(newGame.gameboard['A1'], 'P1')
    })

    it('should not able to place token on the same location', function(){
        var game = new Game()

        game.placement('A1')
        game.placement('B2')
        var check1 = game.placement('A1')
        assert.equal(check1, false)
        var check2 = game.placement('C1')
        assert.equal(check2, true)

    })

    it('Should count number of turn after player select position and place player on the board',function(){
        var game = new Game()
        assert.equal(game.activePlayer.id,'P1')
        game.placement('A1')
        game.placement('B2')

        assert.equal(game.turnCount, 2)
        assert.equal(game.gameboard['A1'],'P1')
    }) 

    it('Should check for draw', function(){
        var game = new Game()
        game.placement('A1')
        game.placement('B2')
        assert.equal(game.activePlayer.id,'P1')
    })

    it('Should switch player between turn', function(){
        var game = new Game()
        game.placement('A1')
        assert.equal(game.activePlayer.id,'P1')
        game.nextPlayer()
        assert.equal(game.activePlayer.id,'P2')
        game.placement('B1')
        game.nextPlayer()
        assert.equal(game.activePlayer.id,'P1')

    })

    it('Should be able to reset the game', function(){})


})

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
    it('should update player position on the game board', function(){
        var newGame = new Game()
        newGame.placement('A1','P1')

        assert.equal(newGame.gameboard['A1'], 'P1')
    })
    it('should compare game data to wincondition', function(){
        var game = new Game()

        game.placement('A1','P1')
        game.placement('B2','P2')
        game.placement('B1','P1')
        game.placement('C2','P2')
        game.placement('C1','P3')

        var winnerCheck = game.winCheck('P1')
        assert.equal(winnerCheck, 'P1 is a WINNER')
    })
    
})


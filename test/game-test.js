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
    
})


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
        var winnerCheck = game.winCheck('P1')

        game.placement('A1','P1')
        game.placement('B2','P2')
        game.placement('B1','P1')
        game.placement('C2','P2')
        game.placement('C1','P1')
        
        assert.equal(game.winConditon[0][0],'A1')
        assert.equal(game.gameboard['A1'],'P1')
        assert.equal(winnerCheck,'P1 is a WINNER')
    })

    it('should compare another game data to wincondition', function(){
        var game1 = new Game()
        var winnerCheck1 = game1.winCheck('P2')

        game1.placement('A1','P1')
        game1.placement('B2','P2')
        game1.placement('B1','P1')
        game1.placement('C2','P2')
        game1.placement('C3','P1')
        game1.placement('A2','P2placement')
        assert.equal(winnerCheck1,'P2 is a WINNER')
    })
    it('should not let another player place token in the same position', function(){
        var game2 = new Game()
        game2.placement('A1','P1')
        game2.placement('B2','P2')
        game2.placement('B1','P1')
        var check = game2.placement('B2','P2')
        assert.equal(check,'CLICK SOMEWHERE ELSE')
    })
    it('Should start the game wiht player 1', function(){
        var game = new Game()
        assert.equal(game.playerTurn.id, 'P1')
    })

    it('Should switch player for every turn', function(){
       var game = new Game()
       game.placement('A1')
       assert.equal(game.playerTurn.id, 'P2')

       game.placement('B2')
       
       assert.equal(game.playerTurn.id, 'P1')

       game.placement('C3')
       assert.equal(game.playerTurn.id, 'P2')
    })

    it('Should annouce draw when no one win', function() {
        var game = new Game()
        game.placement('C1','P1')
        game.placement('A1','P2')
        game.placement('B2','P1')
        game.placement('A3','P2')
        game.placement('A2','P1')
        game.placement('C2','P2')
        game.placement('B3','P1')
        game.placement('B1','P2')
        game.placement('C3','P1')
        
        var status = game.drawConditon()

        assert.equal(status, "It's a draw")
    })


})

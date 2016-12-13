import Game from 'game';

describe('Game', function() {
    var testGame = new Game();

    it('will create a board', function() {
        expect(testGame.gameBoard).toBeDefined(true);
    });

    it('will create two players', function() {
        expect(testGame.playerX).toBeDefined(true);
        expect(testGame.playerO).toBeDefined(true);
    });

    it('will begin with playerX toggled as the active player', function() {
        expect(testGame.playerX.active).toBeDefined(true);
    });

    it('will begin with playerO toggled as the inactive player', function() {
        expect(testGame.playerO.active).toBeDefined(false);
    });


});

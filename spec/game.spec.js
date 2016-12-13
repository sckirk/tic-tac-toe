import Game from 'game';

describe('Game', function() {
    var testGame = new Game();

    it('will create a board', function() {
        expect(testGame.boardArray).toBeDefined(true);
    });
});

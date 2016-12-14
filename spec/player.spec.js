import Player from 'player';
import Game from 'game';

describe('Player', function() {
    var testPlayerX = new Player('X');
    var testPlayerO = new Player('O');

    it('will create two players, each with a different mark', function() {
        expect(testPlayerX.mark).toEqual('X');
        expect(testPlayerO.mark).toEqual('O');
    });

    describe('setMark', function() {
        it('will add applicable mark to the game\'s board', function() {
            var testGame = new Game();

            expect(testPlayerX.setMark(testGame.gameBoard, 0, 0)).toEqual(testPlayerX.mark);
            expect(testPlayerO.setMark(testGame.gameBoard, 2, 2)).toEqual(testPlayerO.mark);
        });

        it('will not allow a player to set a mark in a space that\'s already been set', function() {
            var testGame = new Game();

            testPlayerX.setMark(testGame.gameBoard, 0, 0);
            
            expect(function () {
                testPlayerO.setMark(testGame.gameBoard, 0, 0);
            }).toThrow();
        });
    });
});

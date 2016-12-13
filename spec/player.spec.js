import Player from 'player';

describe('Player', function() {
    var testPlayerX = new Player('X');
    var testPlayerO = new Player('O');

    it('will create two players, each with a different mark', function() {
        expect(testPlayerX.mark).toEqual('X');
        expect(testPlayerO.mark).toEqual('O');
    });
});

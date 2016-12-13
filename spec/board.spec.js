import Board from 'board';

describe('Board', function() {
    var testBoard = new Board();

    it('will return a board as a 2D array', function() {
        expect(testBoard).toEqual([[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]);
    });
});

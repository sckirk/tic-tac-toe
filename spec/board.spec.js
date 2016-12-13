import Board from 'board';

describe('Board', function() {
    var testBoard = new Board();

    it('will have a board as a 2D array', function() {
        expect(testBoard.boardArray).toEqual([[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]);
    });
});

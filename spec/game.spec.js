import Game from 'game';

describe('Game', function() {
  var testGame;
  beforeEach(function() {
    testGame = new Game();
  });

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

  describe('switchTurn', function() {
    it('will switch Player X from the active player to the inactive player', function() {
      expect(testGame.playerX.active).toEqual(true);
      testGame.switchTurn();
      expect(testGame.playerX.active).toEqual(false);
    });

    it('will switch Player O from the inactive player to the active player', function() {
      expect(testGame.playerO.active).toEqual(false);
      testGame.switchTurn();
      expect(testGame.playerO.active).toEqual(true);
    });
  });

  describe('isDone', function() {
    it('will return false if the game is not finished', function() {
      expect(testGame.isDone()).toEqual(false);
      testGame.gameBoard.boardArray = [["X", "O", "X"], ["O", "X", " "], [" ", "X", "O"]];
      expect(testGame.isDone()).toEqual(false);
    });

    it('will return true when there\'s a winner', function() {
      expect(testGame.isDone()).toEqual(false);
      testGame.gameBoard.boardArray = [["X", "X", "X"], ["O", "X", "O"], [" ", "X", "O"]];
      expect(testGame.isDone()).toEqual(true);
    });
  });

  it('will return true when there\'s a tie', function() {
    expect(testGame.isDone()).toEqual(false);
    testGame.gameBoard.boardArray = [["X", "O", "X"], ["O", "X", "O"], ["X", "X", "O"]];
    expect(testGame.isDone()).toEqual(true);
  });
});

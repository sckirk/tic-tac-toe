import Board from 'board';
import Player from 'player';

var Game = function() {
    this.gameBoard = new Board();
    this.playerX = new Player('X');
    this.playerO = new Player('O');
};

// Game.prototype.isDone = function() {
//
// };

// this.playerX.setMark(this.gameBoard, x, y);

export default Game;
